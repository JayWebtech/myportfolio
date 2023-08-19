import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image"
import { useRouter } from "next/navigation";
import {motion as m} from "framer-motion";

export default function Home() {
    const router = useRouter();
    
  return (
    <m.div initial={{ y: "100%" }} animate={{ y: "0" }} transition={{ duration: 0.75, ease: "easeOut" }}>
    <main className="flex flex-col h-screen items-center justify-center p-5 bg-slate-950 intro">
      <Image src="/download.png" width={100} height={100} className="mb-5" />
        <TypeAnimation
          sequence={[
            "欢迎来到我的投资组合",
            400,
            "You don't speak Chinese?😎",
            500,
            "My bad, sorry!😩",
            200,
            "(Chin Chunk Chi)😁",
            10,
            () => {
                router.push("/booting")
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
