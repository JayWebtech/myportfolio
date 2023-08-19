"use client";
import React, { useState, useEffect } from "react";
import { MdWindow } from "react-icons/md";
import { FcFolder } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";

const page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
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
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Add 1 to month because it's zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-slate-950 homepage">
      <div className="flex flex-col items-center justify-center flex-grow"></div>
      <div className="flex items-center justify-center  p-3 backdrop-blur-3xl space-x-6 w-screen">
        <div className="basis-2/12 flex space-x-3">
          <BsFillCloudFill className="text-4xl text-blue-500" />
          <div className="flex flex-col">
            <p className="text-white">
              27<sup>°</sup>C
            </p>
            <p className="text-white text-[13px]">Cloudy</p>
          </div>
        </div>
        <div className="basis-8/12 flex items-center justify-center space-x-8">
          <div className="p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <MdWindow className="text-4xl text-blue-500" />
          </div>
          <div className="p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <FcFolder className="text-4xl" />
          </div>
          <div className="p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <VscGithubInverted className="text-[33px] text-gray-400"/>
          </div>
          <div className="p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <AiFillLinkedin className="text-[40px] text-[#0A66C2]" />
          </div>
          <div className="p-1 rounded-md transition duration-100 hover:shadow-xl hover:bg-slate-900 hover:bg-opacity-50 hover:cursor-pointer hover:backdrop-blur-lg ">
            <FaTwitterSquare className="text-[36px] text-[#00acee]" />
          </div>
        </div>
        <div className="basis-2/12">
          <div className="flex flex-col items-end">
            <p className="text-white">{formattedTime}</p>
            <p className="text-white text-[13px]">{formattedDate}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
