import React from "react";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const DesktopItems = ({ isStartMenuOpen, setShowModal, setGame }) => {
  return (
    <div className={isStartMenuOpen ? "hidden" : "block w-full"}>
      <div className="flex flex-col items-start justify-start w-full p-8 gap-6">
        <div
          className="flex flex-col items-center justify-center p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
            setShowModal(true);
          }}
        >
          <FcFolder className="text-6xl" />
          <p className="text-white text-center">Projects</p>
        </div>
        <Link
          href="https://github.com/JayWebtech"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
          }}
          target="_blank"
        >
          <div className="flex flex-col items-center justify-center p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <VscGithubInverted className="text-[60px] text-white" />
            <p className="text-white text-center mt-1">Github</p>
          </div>
        </Link>

        <Link
          href="https://drive.google.com/file/d/11DUIKYSHdVQ-An9-0nHBJJf9Z5LMYqWi/view?usp=sharing"
          onClick={() => {
            const audio = new Audio("click.wav");
            audio.play();
          }}
          target="_blank"
        >
          <div className="flex flex-col items-center justify-center rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <BiSolidFilePdf className="text-red-600 text-7xl" />
            <p className="text-white text-center mt-1">Resume</p>
          </div>
        </Link>

        <div
          onClick={() => {
            setGame(true);
            const audio = new Audio("click.wav");
            audio.play();
          }}
          className="flex flex-col items-center justify-center rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
        >
          <FaGamepad className="text-green-500 text-6xl" />
          <p className="text-white text-center">Game</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopItems;
