"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useRouter } from "next/navigation";
import { BiLoaderAlt } from "react-icons/bi";
const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [blur, setBlur] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameHanderler = (event) => {
    const { yourname, value } = event.target;
    setName((prevData) => ({
      ...prevData,
      yourname: value,
    }));
  };
  const onInputClick = () => {
    setBlur(true);
  };
  const handleBlur = () => {
    setBlur(false);
  };

  const proceed = () => {
    setLoading(true);
    if (name !== "") {
      localStorage.setItem("name", name);
    }
    const audio = new Audio("start.mp3");
    audio.play();
    router.push("/home");
  };

  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <main className="flex flex-col h-screen items-center justify-center homepage">
        <div
          className={
            blur
              ? "flex flex-col items-center w-screen justify-center flex-grow backdrop-blur-md"
              : "flex flex-col items-center justify-center flex-grow"
          }
        >
          <Image
            src="/img.jpeg"
            width={150}
            height={150}
            className="mb-5 rounded-full"
          />
          <h1 className="text-2xl text-white mb-5 text-center">Welcome to my Portfolio</h1>
         
          <button
            className="py-3 px-1 text-white rounded-md w-[150px] backdrop-blur-2xl shadow-lg  flex items-center justify-center"
            onClick={proceed}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center">
                <BiLoaderAlt className="animate-spin mr-2 text-2xl" />
                Please Wait...
              </div>
            ) : (
              " Get me in"
            )}
          </button>
        </div>
        <div className="flex items-center justify-center  p-3 backdrop-blur-lg space-x-6 w-screen"></div>
      </main>
    </m.div>
  );
};

export default page;
