"use client";
import React, { useState, useEffect } from "react";
import { MdWindow } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { FcBullish } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { BiSolidFilePdf } from "react-icons/bi";
import { FcCollaboration } from "react-icons/fc";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { motion as m} from "framer-motion";

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
  const [info, setInfo] = useState(false);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentTime(new Date());
  //     }, 1000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  //   const formattedTime = currentTime.toLocaleTimeString();
  //   const currentDate = new Date();
  //   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  //   const day = String(currentDate.getDate()).padStart(2, "0");
  //   const year = currentDate.getFullYear();

  //   const formattedDate = `${month}/${day}/${year}`;

  return (
    <main
      className="flex flex-col h-screen items-center justify-center bg-slate-950 homepage "
      pointer-events="auto"
      //   onClick={() => {
      //     if (click) {
      //       // const audio = new Audio("click.wav");
      //       // audio.play();
      //       isClick(!click);
      //       screenSet(!screen);
      //       setIsStartMenuOpen(!isStartMenuOpen);
      //     }
      //   }}
    >
      <div
        className={
          isStartMenuOpen
            ? "flex flex-col items-center justify-center flex-grow bg-slate-900 bg-opacity-30 w-full"
            : "flex flex-col items-center justify-center flex-grow"
        }
      >
        {isStartMenuOpen && screen && (
          <div className="flex  flex-col mt-auto bg-opacity-100 backdrop-blur-lg border border-gray-400 border-opacity-10 text-white rounded-2xl text-[13px] w-[450px] h-auto text-center">
            <div className="flex space-x-8 items-center justify-center  p-5 ">
              <div className="flex flex-col items-center justify-center">
                <FcFolder className="text-5xl" />
                <p className="text-center">Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <BiSolidFilePdf className="text-5xl text-red-600" />
                <p className="text-center">Resume</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FcCollaboration className="text-5xl" />
                <p className="text-center">Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FcBullish className="text-5xl " />
                <p className="text-center">Impact</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FcGraduationCap className="text-5xl" />
                <p className="text-center">Education</p>
              </div>
            </div>

            {info && (
              <div className="flex flex-col items-start justify-start p-5">
                <div className="flex items-start justify-start gap-[136px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                  <p>Name:</p>
                  <p>Adamu Jethro</p>
                </div>
                <hr></hr>
                <div className="flex items-start justify-start gap-[140px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                  <p>Email:</p>
                  <p>jethroadamzy@gmail.com</p>
                </div>
                <div className="flex items-start justify-start gap-[80px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                  <p>Phone Number:</p>
                  <p>08084348312</p>
                </div>
                <div className="flex items-start justify-start gap-[103px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                  <p>Experience:</p>
                  <p>5 years</p>
                </div>
                <div className="flex items-start justify-start gap-[140px] border-t-2 p-1 border-gray-400 border-opacity-10 w-full">
                  <p>Skills:</p>
                  <p className="text-left">
                    React, Next JS, HTML, CSS, PHP, Flutter, Dart, UI/UX,
                    JavaScript, NodeJS, Express, MongoDB, Firebase, REST, Git,
                    Google Maps Platform, Java, Python
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center  bg-black mt-auto w-full bg-opacity-20 rounded-b-2xl p-3 space-x-3">
              <Image src="/male.svg" width={40} height={40} className="" />
              <div className="flex flex-col justify-start items-start flex-grow">
                <p className="text-white text-[14px]">Adamu Jethro</p>
                <p className="text-white text-[11px]">Web/Mobile Developer</p>
              </div>
              <div className="ml-auto">
                {info ? (
                  <BiChevronDown
                    className="text-3xl cursor-pointer"
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setInfo(!info);
                    }}
                  />
                ) : (
                  <BiChevronUp
                    className="text-3xl cursor-pointer"
                    onClick={() => {
                      const audio = new Audio("click.wav");
                      audio.play();
                      setInfo(!info);
                    }}
                  />
                )}
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
            {/* <p className="text-white Rajdhani">{formattedTime}</p> */}
            {/* <p className="text-white text-[13px] Rajdhani">{formattedDate}</p> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
