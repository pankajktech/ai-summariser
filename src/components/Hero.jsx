import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-5 ">
        <p className="text-2xl font-bold">Summ It</p>
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/pankajktech/");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />
        <span
          className="blue_gradient
        "
        >
          ChatGPT
        </span>
      </h1>
    </header>
  );
};

export default Hero;
