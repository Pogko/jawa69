import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../supabase";
import axios from "axios";
import Swal from "sweetalert2";

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userIp, setUserIp] = useState("");
  const [messageCount, setMessageCount] = useState(0);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
    }, 100);
  };

  // 🔥 FIX IP (pakai ipify, bukan ipapi)
  const getUserIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setUserIp(response.data.ip);
    } catch (error) {
      console.error("IP gagal:", error);
      setUserIp("unknown");
    }
  };

  // 🔥 Ambil pesan
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("chats")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Gagal ambil pesan:", error);
      return;
    }

    const newMessages = data.map((item) => ({
      message: item.message || "",
      sender: {
        image: item.sender_image || "/AnonimUser.png",
      },
    }));

    setMessages(newMessages);
    scrollToBottom();
  };

    // 🔥 Realtime FIX (NO DUPLICATE)
      useEffect(() => {
          getUserIp();
              fetchMessages();
                                                                                                                                          }, []); // 🔥 WAJIB KOSONG

  // 🔥 Limit pesan
  useEffect(() => {
    if (!userIp) return;

    const today = new Date().toDateString();
    const storedDate = localStorage.getItem("msgDate");

    if (today === storedDate) {
      const count = parseInt(localStorage.getItem(userIp)) || 0;
      setMessageCount(count);
    } else {
      localStorage.setItem("msgDate", today);
      localStorage.setItem(userIp, "0");
      setMessageCount(0);
    }
  }, [userIp]);

  const sendMessage = async () => {
    if (message.trim() === "") return;

    if (messageCount >= 20) {
      Swal.fire({
        icon: "error",
        title: "Limit tercapai",
        text: "Maksimal 20 pesan per hari",
      });
      return;
    }

    const trimmed = message.trim().substring(0, 60);

    const { error } = await supabase.from("chats").insert({
      message: trimmed,
      sender_image: "/AnonimUser.png",
      user_ip: userIp,
    });

    if (error) {
      console.error("Gagal kirim:", error);
      return;
    }

    const newCount = messageCount + 1;
    localStorage.setItem(userIp, newCount.toString());
    setMessageCount(newCount);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
  <div className="" id="ChatAnonim">
    <div className="text-center text-4xl font-semibold" id="Glow">
      Text Anonim
    </div>

    <div className="mt-5" id="KotakPesan" style={{ overflowY: "auto" }}>
      {messages.map((msg, index) => (
        <div key={index} className="flex items-start text-sm py-[1%]">
          <img
            src={msg?.sender?.image || "/AnonimUser.png"}
            alt="User Profile"
            className="h-7 w-7 mr-2"
          />
          <div className="relative top-[0.30rem]">{msg.message}</div>
        </div>
      ))}
      <div ref={messagesEndRef}></div>
    </div>

    <div id="InputChat" className="flex items-center mt-5">
      <input
        className="bg-transparent flex-grow pr-4 w-4 placeholder:text-white placeholder:opacity-60"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ketik pesan Anda..."
        maxLength={60}
      />

      <button onClick={sendMessage} className="ml-2">
        <img
          src="/paper-plane.png"
          alt=""
          className="h-4 w-4 lg:h-6 lg:w-6"
        />
      </button>
    </div>
  </div>
);
}

export default Chat;

