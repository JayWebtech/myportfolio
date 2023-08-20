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
import { MdOutlineClose } from "react-icons/md";
import AnimatedItem from "../components/AnimatedItem";
import { BsChevronLeft } from "react-icons/bs";

const Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuHovered, setIsStartMenuHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isTwitterHovered, setIsTwitterHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [screen, screenSet] = useState(false);
  const [click, isClick] = useState(false);
  const [info, setInfo] = useState(false);

  const [sureplug, setSureplug] = useState(false);
  const [scam, setScam] = useState(false);
  const [track, setTrack] = useState(false);
  const [virtual, setVirtual] = useState(false);
  const [statesapi, setStatesapi] = useState(false);
  const [heart, setHeart] = useState(false);
  const [qr, setQR] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

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
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 transition-opacity ${
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-opacity-100 backdrop-blur-3xl border border-gray-400  w-[1000px] h-auto p-1 rounded-lg shadow-xl  border-opacity-10">
          <div className="flex">
            <MdOutlineClose
              className="text-white text-4xl ml-auto p-1  hover:bg-red-600 rounded-tr-md rounded-br-md"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                closeModal();
              }}
            />
          </div>

          <div className="flex flex-col items-start justify-start p-5">
            {sureplug && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setSureplug(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Sureplug
                  </h1>
                  <p className="text-white text-sm">
                    Built with HTML/CSS, Javascript, Ajax, PHP, MySQL &
                    Bootstrap{" "}
                  </p>
                  <Link
                    href="https://www.mysureplug.com"
                    target="_blank"
                    className="text-gray-400 text-[12px] mb-5"
                  >
                    www.mysureplug.com
                  </Link>
                  <h2 className="text-xl font-bold text-white mb-3">
                    About Sureplug
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    Sureplug is your go-to platform for connecting with skilled
                    local artisans in your area. Whether you need a plumber,
                    electrician, tailor, carpenter, or any other professional,
                    Sureplug makes it easy to discover and connect with the
                    right artisans for your needs. Our platform simplifies the
                    process of finding trustworthy local artisans, making your
                    life easier and more convenient. Get the job done right with
                    Sureplug.
                  </p>

                  <div>
                    <ol className="text-white text-sm leading-6" typeof="list">
                      <li>
                        1. Developed and launched a directory of local artisans
                        across multiple states.
                      </li>
                      <li>
                        2. Created a user-friendly website with a search feature
                        for easy artisan discovery.
                      </li>
                      <li>
                        3. Implemented self-registration and monetization
                        features for artisans, generating revenue through
                        listings and sponsored content.
                      </li>
                    </ol>
                  </div>
                </div>
              </AnimatedItem>
            )}

            {scam && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setScam(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Scam Shield
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with Flutter & Firebase{" "}
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About Scam shield
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    Scam Shield is a mobile application designed to protect
                    users from fraudulent activities, such as phone scams, email
                    phishing, and fraudulent websites. The app allows
                    individuals to report suspicious phone numbers, emails, and
                    websites related to fraudulent activities. Users can also
                    search for reported numbers, emails, and websites to confirm
                    if they have ever been associated with scams. Scam Shield
                    provides a platform for users to collaborate in the fight
                    against scams by sharing information about fraudulent
                    activities. The app includes features for reporting scams,
                    verifying reported data, and receiving real-time alerts
                    about new scams in their area. It also offers educational
                    resources to help users recognize and avoid scams. The
                    primary goal of Scam Shield is to create a safer digital
                    environment by empowering individuals to report and protect
                    themselves and others from falling victim to fraudulent
                    activities.
                  </p>
                </div>
              </AnimatedItem>
            )}

            {track && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setTrack(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Track it
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with Flutter, Google Maps API & Firebase{" "}
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About Track it
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    Track It is a powerful mobile app designed to protect your
                    smartphone and enhance your peace of mind. With features
                    like IMEI verification, stolen phone reporting, and live
                    location tracking, Track It empowers you to safeguard your
                    device and recover it in case of loss or theft.
                  </p>
                </div>
              </AnimatedItem>
            )}

            {virtual && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setVirtual(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Virtual E-Learning system
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with NodeJS, ExpressJS, Socket.io, MongoDB & Bootstrap{" "}
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About Virtual E-Learning system
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    This is a virtual e-learning system developed for NILEST. It
                    allows lecturers host lectures online and also allow
                    students to join virtually {"("}Just like Zoom & Google Meet
                    {")"}
                  </p>
                  <div>
                    <ol className="text-white text-sm leading-6" typeof="list">
                      <li>
                        1. Designed and developed the architecture of the
                        web-based Virtual E-Learning System for NILEST.
                      </li>
                      <li>
                        2. Implemented Socket.io for real-time video
                        conferencing and communication in virtual classrooms.
                      </li>
                      <li>
                        3. Integrated MongoDB for secure and efficient storage
                        of user data.
                      </li>
                    </ol>
                  </div>
                </div>
              </AnimatedItem>
            )}

            {statesapi && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setStatesapi(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Nigeria States & Local Government API
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with NodeJS & Postman{" "}
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About Nigeria States & Local Government API
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    A mini project that compiles all the States and Local
                    Governments in an API. The API was implemented in NodeJS for
                    developers to fetch Nigeria states and Local Government
                    Dynamically.
                  </p>
                </div>
              </AnimatedItem>
            )}

            {heart && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setHeart(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    Expert System for Diagnosing Heart Disease
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with Flutter, Node JS, MongoDB & Bootstrap
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About Expert System
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    The Expert system was developed for Diagnosing Heart Disease
                    using a standard rule base. I implemented user-friendly web
                    and mobile interfaces for easy access to the system. I also
                    designed and developed the system's architecture, including
                    the rule base and decision tree algorithm for accurate
                    diagnosis of heart disease.
                  </p>
                </div>
              </AnimatedItem>
            )}

            {qr && (
              <AnimatedItem animationConfig={{ delay: 0.1 }}>
                <BsChevronLeft
                  className="text-white mb-4 text-lg cursor-pointer"
                  onClick={() => {
                    const audio = new Audio("click.wav");
                    audio.play();
                    setQR(false);
                  }}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-2 mb-4 border-gray-400 border-opacity-10 w-full">
                    QR Code attenance system
                  </h1>
                  <p className="text-white text-sm mb-5">
                    Built with Flutter & Firebase
                  </p>

                  <h2 className="text-xl font-bold text-white mb-3">
                    About QR Code attenance system
                  </h2>
                  <p className="text-white text-sm mb-5 leading-6">
                    The QR Code Attendance System is a mobile application
                    developed using Flutter and Firebase that simplifies the
                    process of tracking attendance for various events, classes,
                    or meetings. This modern solution replaces the traditional
                    paper-based attendance sheet with an efficient digital
                    system.
                  </p>
                </div>
              </AnimatedItem>
            )}

            {!sureplug &&
              !scam &&
              !track &&
              !virtual &&
              !statesapi &&
              !heart &&
              !qr && (
                <div className="flex flex-col w-full">
                  <h1 className="text-4xl font-bold text-white border-b-2 pb-4 border-gray-400 border-opacity-10 w-full">
                    Personal Projects
                  </h1>
                  <div className="flex mt-5 w-full gap-2">
                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setSureplug(true);
                      }}
                      className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image
                          src="/sureplug.svg"
                          width={70}
                          height={70}
                          className="rounded-full"
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">Sureplug</p>
                          <p className="text-white text-base">Website</p>
                          <p className="text-white text-[10px]">
                            HTML, CSS, PHP, JQuery & MysQL
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setScam(true);
                      }}
                      className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image src="/scam.png" width={50} height={5} />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">Scam Shield</p>
                          <p className="text-white text-base">Mobile App</p>
                          <p className="text-white text-[10px]">
                            Flutter & Firebase
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setTrack(true);
                      }}
                      className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image src="/track.png" width={70} height={5} />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">Track it</p>
                          <p className="text-white text-base">Mobile App</p>
                          <p className="text-white text-[10px]">
                            Flutter, Google Maps API & Firebase
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-5 w-full gap-2">
                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setVirtual(true);
                      }}
                      className="basis-4/12 flex flex-col cursor-pointer  bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image
                          src="/nilest.svg"
                          width={70}
                          height={30}
                          className="rounded-full"
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">
                            Virtual E-Learning
                          </p>
                          <p className="text-white text-base">Website</p>
                          <p className="text-white text-[10px]">
                            Node, Express, Socket.io & MongoDB
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setStatesapi(true);
                      }}
                      className="basis-4/12 flex flex-col cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image src="/flag.svg" width={70} height={50} />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">
                            States & LGAs API{" "}
                          </p>
                          <p className="text-white text-base">REST API</p>
                          <p className="text-white text-[10px]">
                            Node & Postman
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setHeart(true);
                      }}
                      className="basis-4/12 cursor-pointer flex flex-col bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image
                          src="/heart.png"
                          width={70}
                          height={5}
                          className="rounded-full"
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">
                            Heart Disease E.S
                          </p>
                          <p className="text-white text-base">Mobile App</p>
                          <p className="text-white text-[10px]">
                            Flutter & Node JS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-5 w-full gap-2">
                    <div
                      onClick={() => {
                        const audio = new Audio("click.wav");
                        audio.play();
                        setQR(true);
                      }}
                      className="w-full flex flex-col  cursor-pointer bg-black bg-opacity-30 border-2 border-gray-400 border-opacity-10 backdrop-blur-xl p-3 rounded-xl "
                    >
                      <div className="flex gap-3">
                        <Image
                          src="/qr.png"
                          width={70}
                          height={30}
                          className="rounded-lg"
                        />
                        <div className="flex flex-col">
                          <p className="text-white text-xl">
                            QR Code attenance system
                          </p>
                          <p className="text-white text-base">Mobile App</p>
                          <p className="text-white text-[10px]">
                            Flutter & Firebase
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
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
            onClick={() => {
              const audio = new Audio("click.wav");
              audio.play();
              setShowModal(true);
            }}
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
