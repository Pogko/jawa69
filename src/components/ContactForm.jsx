import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendMessage = () => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tolong isi semua field.",
        customClass: {
          container: "sweet-alert-container",
        },
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tolong masukkan email yang valid.",
        customClass: {
          container: "sweet-alert-container",
        },
      });
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send('service_w4u717q', 'template_3kqxajv', templateParams, '30uyQKyScLQSGpkLp')
      .then((response) => {
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage(""); // Reset pesan kesalahan

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Pesan Anda telah dikirim!",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        setErrorMessage(`Error: ${error.text}`); // Set pesan kesalahan
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi.",
          customClass: {
            container: "sweet-alert-container",
          },
        });
      });
  };

  return (
    <div>
      <div className="text-center text-2xl font-semibold mb-2 text-white" id="Glow">
        Formulir Kontak
      </div>
      <div id="FormContact" className="flex flex-col mt-5">
        <form>
          <div className="flex items-center mb-4">
            <label htmlFor="name" className="text-white w-20 mb-2">Nama:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
            />
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="email" className="text-white w-20 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
            />
          </div>

          <div className="flex items-center mb-4">
            <label htmlFor="message" className="text-white w-20 mb-2">Pesan:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white p-1 flex-grow"
            />
          </div>
        </form>
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Kirim
        </button>
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>} {/* Tampilkan pesan kesalahan */}
      </div>
    </div>
  );
};

export default ContactForm;