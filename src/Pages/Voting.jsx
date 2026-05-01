import React, { useState, useEffect } from "react";
import { supabase } from "../supabase";
import "../index.css";

const Voting = () => {
  const [votes, setVotes] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [isVotingAvailable, setIsVotingAvailable] = useState(false);

  const options = []; // Kosongkan untuk tes "tidak ada voting"

  useEffect(() => {
    const fetchVotes = async () => {
      const votesData = {};

      for (const option of options) {
        const { data, error } = await supabase
          .from("votes")
          .select("count")
          .eq("option", option)
          .maybeSingle();

        if (error) {
          console.error("Gagal mengambil vote:", error);
          votesData[option] = 0;
        } else {
          votesData[option] = data?.count || 0;
        }
      }

      setVotes(votesData);
      setIsVotingAvailable(options.length > 0);
    };

    fetchVotes();
  }, []);

  const handleVote = async (option) => {
    if (hasVoted) return;
    setHasVoted(true);

    const { data, error } = await supabase
      .from("votes")
      .select("count")
      .eq("option", option)
      .maybeSingle();

    if (error) {
      console.error("Gagal mengambil vote:", error);
      return;
    }

    const currentCount = data?.count || 0;

    const { error: upsertError } = await supabase
      .from("votes")
      .upsert({ option, count: currentCount + 1 }, { onConflict: "option" });

    if (upsertError) {
      console.error("Gagal menyimpan vote:", upsertError);
      return;
    }

    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: (prevVotes[option] || 0) + 1,
    }));
  };

  return (
    <div className="voting-container">
      <h2 className="voting-title">Voting System</h2>
      {isVotingAvailable ? (
        <div className="voting-options">
          {options.map((option) => (
            <div
              key={option}
              className={`vote-option ${hasVoted ? "voted" : ""}`}
              onClick={() => handleVote(option)}
            >
              <div className="vote-text">{option}</div>
              <div className="vote-count">{votes[option] || 0} Votes</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-voting-text">
          Saat ini tidak ada voting yang sedang berlangsung.  
          Nantikan voting berikutnya!  
        </div>
      )}
    </div>
  );
};

export default Voting;
