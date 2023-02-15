import { motion } from "framer-motion";

import React from "react";
import SplineScene from "./SplineScene";

const Landing = () => {
  return (
    <section className="md:flex md:justify-between h-full mt-3">
      <div className=" basis-2/5">
        <motion.div
          className="bg-lime-green left-0 rounded-r-full w-2/5 my-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-righteous pl-4 py-2 text-4xl">Cat Room</p>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mt-10 ml-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p className="text-4xl text-center font-righteous md:text-start">
            3D room with Game Controls
          </p>
          <p className="text-lime-green mt-3 text-sm text-center font-righteous md:text-start">
            Explore and interact with Drawers, TV screens, Sliding Doors, Night
            Mode Switches and much more for you to discover.
          </p>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          className="flex ml-14 mt-5 justify-center md:justify-start md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <a
            href="../../cat_room.rar"
            download
            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Download
            </span>
            <span class="absolute inset-0 border-2 border-lime-green rounded-full"></span>
          </a>
          <a
            href="https://my.spline.design/3dgame1-3c53cb0228ab601bb22f23e40c445281/"
            target="_blank"
            class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
            rel="noreferrer"
          >
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Play Game
            </span>
            <span class="absolute inset-0 border-2 border-lime-green rounded-full"></span>
          </a>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="mt-8 ml-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p className="text-4xl text-center font-righteous md:text-start">
            Controls
          </p>
          <div className="bg-lime-green flex justify-center gap-10 rounded-lg mt-3 p-2">
            <img
              className="md:max-width-[100px] md:max-h-[100px]"
              src="../assets/keyboard-button.png"
              alt="WSAD KEYS"
            />
            <img
              className="md:max-width-[100px] md:max-h-[100px]"
              src="../assets/left-click.png"
              alt="Mouse-click"
            />
            <img
              className="md:max-width-[100px] md:max-h-[100px]"
              src="../assets/space.png"
              alt="Spacebar"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center basis-3/5">
        <div className="mt-4 mr-6 w-10/12 h-[92%]">
          <SplineScene />
        </div>
      </div>
    </section>
  );
};

export default Landing;
