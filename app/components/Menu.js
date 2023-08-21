import React from "react";
import { FcBullish } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { BiSolidFilePdf } from "react-icons/bi";
import { FcCollaboration } from "react-icons/fc";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { FcFolder } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

const Menu = ({
  isStartMenuOpen,
  setShowModal,
  screen,
  setexperience,
  setImpact,
  setEducation,
  setInfo,
  info,
}) => {
  return (
    <div
      className={
        isStartMenuOpen
          ? "flex flex-col items-center justify-center flex-grow bg-slate-900 bg-opacity-30 w-full"
          : "flex flex-col items-center justify-center flex-grow"
      }
    >
      {isStartMenuOpen && screen && (
        <div className="flex  flex-col mt-auto bg-opacity-100 backdrop-blur-lg border border-gray-400 border-opacity-10 text-white rounded-2xl text-[13px] w-[450px] h-auto text-center smbelow:w-[95%]">
          <div className="flex space-x-8 items-center justify-center smbelow:flex-wrap smbelow:item-start smbelow:space-x-2 smbelow:justify-evenly  p-5 ">
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setShowModal(true);
              }}
            >
              <FcFolder className="text-5xl smbelow:text-4xl" />
              <p className="text-center smbelow:hidden">Projects</p>
            </div>
            <Link
              href="https://drive.google.com/file/d/11DUIKYSHdVQ-An9-0nHBJJf9Z5LMYqWi/view?usp=sharing"
              target="_blank"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <BiSolidFilePdf className="text-5xl text-red-600 smbelow:text-4xl" />
                <p className="text-center smbelow:hidden">Resume</p>
              </div>
            </Link>
            <div
              className="flex flex-col items-center justify-center"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setexperience(true);
              }}
            >
              <FcCollaboration className="text-5xl cursor-pointer smbelow:text-4xl" />
              <p className="text-center smbelow:hidden">Experience</p>
            </div>
            <div
              className="flex flex-col items-center justify-center"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setImpact(true);
              }}
            >
              <FcBullish className="text-5xl cursor-pointer smbelow:text-4xl" />
              <p className="text-center smbelow:hidden">Impact</p>
            </div>
            <div
              className="flex flex-col items-center justify-center"
              onClick={() => {
                const audio = new Audio("click.wav");
                audio.play();
                setEducation(true);
              }}
            >
              <FcGraduationCap className="text-5xl cursor-pointer smbelow:text-4xl" />
              <p className="text-center smbelow:hidden">Education</p>
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
                <p className="smbelow:truncate">jethroadamzy@gmail.com</p>
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
  );
};

export default Menu;
