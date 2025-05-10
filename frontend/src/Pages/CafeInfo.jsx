import React from 'react';
import { Link } from 'react-router-dom';
// import backgroundVideo from '../img/vid.mp4'; 
import aboutImage from '../img/tp.jpg';
import { motion } from 'framer-motion';

import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Testimonial from './Testimonial';
import Zzero from '../Components/Zzero';



const CafeInfo = () => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex justify-center items-center px-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"

        >

          <source src="/img/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>



        <nav className="absolute top-0 left-0 w-full flex justify-end items-center p-5 md:px-20">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="text-white text-sm md:text-base px-4 py-2 rounded hover:bg-[#1aeeef] hover:text-[#050e2d] transition shadow-md"
              >
                Back to Home
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-[120px] z-1 font-bold hover:text-transparent hover:stroke-white transition-all duration-500">
            Gammers
          </h1>
          <p className="mt-4 text-lg z-1 md:text-2xl font-semibold">It's time for you to win the lottery</p>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-16 gap-20">
        <div className="md:w-1/2">
          {/* Title with animation */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            What We Offer
          </motion.h2>

          {/* Each Offer with animation */}
          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-2xl font-bold">High End PCs</h4>
            <p className="text-[#dbd9d9] text-justify">
              "Our PCs are finely tuned and rigorously tested to deliver an unmatched gaming experience.
              No excuses—just performance. Your opponents won’t stand a chance."
            </p>
          </motion.div>

          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h4 className="text-2xl font-bold">Experience</h4>
            <p className="text-[#dbd9d9] text-justify">
              "Our diskless setup guarantees that every PC is identical—no unfair advantages, just pure skill. Plus,
              our managers are always on hand to assist you with any concerns, anytime."
            </p>
          </motion.div>

          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h4 className="text-2xl font-bold">High Speed Internet</h4>
            <p className="text-[#dbd9d9] text-justify">
              "We’d never let gamers in our lounge be labeled as laggers. With both primary and backup internet
              connections, you’ll stay connected from your ‘glhf’ to their ‘gg’—no drops, no excuses."
            </p>
          </motion.div>

          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h4 className="text-2xl font-bold">Console Stations</h4>
            <p className="text-[#dbd9d9] text-justify">
              "Console gamers, your PS4s are ready—just grab a controller and dive into the action
              on stunning 40-inch Full HD screens."
            </p>
          </motion.div>

          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4 className="text-2xl font-bold">Cafe</h4>
            <p className="text-[#dbd9d9] text-justify">
              "For gamers who hate leaving their seats—even when hunger strikes—just say the word,
              and we’ll serve food and beverages right at your desk. Your wish is our command."
            </p>
          </motion.div>

          <motion.div
            className="mb-15"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h4 className="text-2xl font-bold">Technical Infrastructure</h4>
            <p className="text-[#dbd9d9] text-justify">
              "Our diskless solution ensures every PC is the same, giving no one an advantage. With game libraries
              synced across platforms, your games are always ready to go. Cloud profile saving keeps your
              settings and progress intact, and our customer dashboard makes tracking your time and balance easy."
            </p>
          </motion.div>
        </div>
      
    
        <div className="md:w-1/2">
          
          <Zzero/>
        </div>
      </section>
      <Testimonial/>
    </div>
  );
};

export default CafeInfo;
