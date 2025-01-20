import React, { useEffect, useState} from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image"
import { useRouter } from "next/navigation";
import {motion as m} from "framer-motion";

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

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

    
  return (
    <m.div initial={{ y: "100%" }} animate={{ y: "0" }} transition={{ duration: 0.75, ease: "easeOut" }}>
    <main className="flex flex-col h-screen items-center justify-center p-5 bg-slate-950 intro">
      <Image src="/download.png" width={100} height={100} className="mb-5" />
        <TypeAnimation
          sequence={[
            currentQuote,
            500,
            () => {
               router.push("/welcome")
            },
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          className="font-handjet text-center text-white"
        />
    </main>
    </m.div>
  );
}
