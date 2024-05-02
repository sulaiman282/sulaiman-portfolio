import React from "react";

export default function SocialLink() {
  return (
    <div className="sticky-icon ">
      <a
        href="https://wa.me/8801856077645"
        target="_blank"
        rel="noreferrer"
        className="backdrop-blur-lg hover:bg-[#8856F2]/20 duration-300 flex justify-between items-center mx-5 shadow-md"
      >
        <p className="text-center w-full text-white">WhatsApp</p>
        <img
          src={"/whatsapp.png"}
          alt="WhatsApp logo"
          className="w-5 h-5 md:w-7 md:h-7 object-contain"
        />
      </a>
    </div>
  );
}
