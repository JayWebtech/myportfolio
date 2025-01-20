"use client";
import Intro from "./components/Intro";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
 const Home =({Component, pageProps})=> {
  
  const router = useRouter();
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Intro {...pageProps} key={router.pathname} /> 
    </AnimatePresence>
  );
}

export default Home;
