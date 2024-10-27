"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const cards = [
    {
      title: "Finance Team",
      src: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/w915qDneEQakfe7H7",
    },
    {
      title: "Technical Team",
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/EgxTDrraqUtBgbTA6",
    },
    {
      title: "Corporate Outreach Team",
      src: "https://images.unsplash.com/photo-1663162550928-2c2389cdb27d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/FVe9pmyXoPCUcmiQ7",
    },
    {
      title: "Design Team",
      src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/e3SpJoPxhcYVBLAV6",
    },
    {
      title: "Social Media Team",
      src: "https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/Zg3GusLS3dwoB8HH6",
    },
    {
      title: "Photography Team",
      src: "https://images.unsplash.com/photo-1457608135803-4827addc43e0?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/SnZuRgA79zvgHX1m6",
    },
    {
      title: "Content Team",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/ZJ7wZ4ZyKrq11GX58",
    },
    {
      title: "Event Team",
      src: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://forms.gle/eErQPERrVmitzNV8A",
    },
  ];

  return (
    <>
      <HeroHighlight className="min-h-screen w-screen p-6">
      <img
  src="https://i.imgur.com/9hV9cRw.png"
  className="absolute top-8 left-8 md:w-[75px] md:h-[75px] object-cover w-[50px] h-[50px]" // csi
/>
<img
  src="https://i.imgur.com/1fIFbIu.png"
  className="absolute top-8 right-8 md:w-[175px] md:h-[75px] object-cover w-[120px] h-[50px]" // vitb
/>


        <div className="font-bold text-4xl md:text-6xl text-center w-full mb-4 pt-60">
          CSI Student Chapter
        </div>
        <div className="text-center font-semibold text-lg md:text-xl w-full">
          VIT Bhopal
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl md:text-1xl px-4 font-bold text-neutral-700 dark:text-white text-center mx-auto mb-6 pt-20 pb-60 overflow-hidden max-w-5xl "
        >
          Are you eager to transform your ideas into reality and carve a path
          toward a brighter future? <br /> The CSI Student Chapter at VIT Bhopal
          University is looking for enthusiastic, driven individuals to join our
          dynamic teams. <br /> <br />
          <Highlight className="text-black dark:text-white md:text-3xl pr-4 pl-4">
            Create. Innovate. Transform.
          </Highlight>
        </motion.h1>
        <div className="pb-40">
          <FocusCards cards={cards} />
        </div>
        <footer className=" bg-opacity-60 bg-black text-white pt-10">
          <div className="container mx-auto text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="mailto:csi@vitbhopal.ac.in"
                className="hover:text-gray-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://www.instagram.com/csi.vitb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/csivitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="font-bold text-lg">Faculty Coordinator:</div>
            <div className="mt-2 pb-5">
              <p>Dr. K Murugeswari</p>
            </div>
            <div className="font-bold text-lg">Student Coordinators:</div>
            <div className="mt-2 pb-5">
              <p>Aayushman Arora - (President) </p>
              <p>Pratham Goyal - +91 82934 65263</p>
              <p>Spandan Kumar Sahoo - +91 76090 24708</p>
            </div>
          </div>
        </footer>
      </HeroHighlight>
    </>
  );
}
