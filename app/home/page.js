"use client";
import React, { useState, useEffect } from "react";
import { MdWindow } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";
import {GrAchievement} from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import {BsPersonWorkspace} from "react-icons/bs";
import {GiSkills} from "react-icons/gi";



const Page = () => {
    
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuHovered, setIsStartMenuHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);

  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [screen, screenSet] = useState(false);
  const [click, isClick] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;


  return (
    <main
      className="flex flex-col h-screen items-center justify-center bg-slate-950 homepage "
      onClick={() => {
        if (click) {
            const audio = new Audio("click.wav");
        audio.play();
          isClick(!click);
          screenSet(!screen);
          setIsStartMenuOpen(!isStartMenuOpen);
        }
      }}
    >
      <div
        className={
          isStartMenuOpen
            ? "flex flex-col items-center justify-center flex-grow bg-slate-900 bg-opacity-30 w-full"
            : "flex flex-col items-center justify-center flex-grow"
        }
      >
        {isStartMenuOpen && screen && (
          <div className="mt-auto bg-opacity-100 backdrop-blur-lg border border-gray-400 border-opacity-10 text-white p-5 rounded-2xl text-[13px] w-[450px] h-[200px] text-center">
            <div className="flex space-x-8 items-center">
                <div>
                    <FcFolder className="text-6xl" />
                    <p>Projects</p>
                </div>
                <div>
                    <Image src="adobe.svg" width={50} height={50} className="" />
                    <p>Resume</p>
                </div>
                <div>
                    <BsPersonWorkspace  className="text-6xl bg-slate-900 p-5"/>
                    <p>Experience</p>
                 </div>
                <div className="bg-green-500 rounded-md p-2">
                    <GrAchievement className="text-4xl text-white"/>
                 </div>
                 <div className="bg-purple-900 rounded-md p-2">
                    <GiSkills className="text-4xl"/>
                 </div>
                 
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center p-3 backdrop-blur-3xl space-x-6 w-screen">
        <div className="basis-2/12 flex space-x-3">
          <BsFillCloudFill className="text-4xl text-blue-500" />
          <div className="flex flex-col">
            <p className="text-white Rajdhani">
              27<sup>°</sup>C
            </p>
            <p className="text-white text-[13px] Rajdhani">Cloudy</p>
          </div>
        </div>
        <div className="basis-8/12 flex items-center justify-center space-x-5">
          <div
            className={
              isStartMenuOpen
                ? "p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg bg-slate-900"
                : "p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
            }
            onMouseEnter={() => setIsStartMenuHovered(true)}
            onMouseLeave={() => setIsStartMenuHovered(false)}
            onClick={() => {
                const audio = new Audio("click.wav");
              audio.play();
              isClick(!click);
              screenSet(!screen);
              setIsStartMenuOpen(!isStartMenuOpen);
            }}
          >
            <MdWindow className="text-4xl text-blue-500" />

            {isStartMenuHovered && !isStartMenuOpen && (
              <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                Start Menu
              </span>
            )}
          </div>
          <div
            className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
            onMouseEnter={() => setIsProjectsHovered(true)}
            onMouseLeave={() => setIsProjectsHovered(false)}
          >
            <FcFolder className="text-4xl" />
            {isProjectsHovered && (
              <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                Projects
              </span>
            )}
          </div>
          <Link
            href="https://github.com/JayWebtech"
            onClick={() => {
                const audio = new Audio("click.wav");
              audio.play();
            }}
            target="_blank"
          >
            <div
              className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
              onMouseEnter={() => setIsGithubHovered(true)}
              onMouseLeave={() => setIsGithubHovered(false)}
            >
              <VscGithubInverted className="text-[33px] text-gray-400" />
              {isGithubHovered && (
                <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                  Github
                </span>
              )}
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jaykosai/"
            target="_blank"
            onClick={() => {
                const audio = new Audio("click.wav");
              audio.play();
            }}
          >
            <div
              className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
              onMouseEnter={() => setIsLinkedInHovered(true)}
              onMouseLeave={() => setIsLinkedInHovered(false)}
            >
              <AiFillLinkedin className="text-[40px] text-[#0A66C2]" />
              {isLinkedInHovered && (
                <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                  LinkedIn
                </span>
              )}
            </div>
          </Link>
          <Link
            href="https://twitter.com/jaykosai"
            target="_blank"
            onClick={() => {
                const audio = new Audio("click.wav");
              audio.play();
            }}
          >
            <div
              className="p-1 rounded-md relative transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg "
              onMouseEnter={() => setIsTwitterHovered(true)}
              onMouseLeave={() => setIsTwitterHovered(false)}
            >
              <FaTwitterSquare className="text-[36px] text-[#00acee]" />
              {isTwitterHovered && (
                <span className="bg-black text-white p-2 rounded-md absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-[13px] w-[100px] text-center">
                  Twitter
                </span>
              )}
            </div>
          </Link>
        </div>
        <div className="basis-2/12">
          <div className="flex flex-col items-end">
            <p className="text-white Rajdhani">{formattedTime}</p>
            <p className="text-white text-[13px] Rajdhani">{formattedDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
