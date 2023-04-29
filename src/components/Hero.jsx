import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-5 ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14" />
          <h1 className="text-2xl font-bold">AI Summariser</h1>
        </div>
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/pankajktech/ai-summariser");
          }}
          className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span className="blue_gradient">ChatGPT</span>
      </h1>

      <p className="font-inter text-gray-700 text-center max-w-2xl">
        Summarize any article with the power of AI. <br />
        Just paste the link and get the summary.
      </p>
    </header>
  );
};

export default Hero;
