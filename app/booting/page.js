"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import { TypeAnimation } from "react-type-animation";
import { motion as m } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const quotes = [
    "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    "On the keyboard of life, always keep one finger on the escape key.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "There are two ways to write error-free programs; only the third one works.",
    "It's hardware that makes a machine fast. It's software that makes a fast machine slow.",
    "Like car accidents, most hardware problems are due to driver error",
    "If at first you don't succeed; call it version 1.0",
    "The more I C, the less I see.",
    "Life would be so much easier if we only had the source code.",
  ];
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exitOPacity={1}
    >
      <main className="flex flex-col h-screen items-center justify-center p-5 bg-slate-950 booting">
        <div className="flex flex-col items-center justify-center flex-grow">
          <Image
            src="/download.png"
            width={100}
            height={100}
            className="mb-10"
          />
          <ImSpinner8 className="animate-spin text-3xl text-white" />
        </div>
        <div className="lg:ml-32 lg:mr-32">
          <TypeAnimation
            sequence={[
              currentQuote,
              700,
              () => {
                router.push("/welcome");
              },
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "18px", display: "inline-block" }}
            className="font-Rajdhani text-center text-white"
          />
        </div>
      </main>
    </m.div>
  );
}
