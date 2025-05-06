import React from 'react';
import Header from '../Components/Header';
import assassinImg from '../assets/assassin2.png';
import StartCanvas from '../Components/Stars';

const Home = () => {
    return (
        <div className="w-full flex flex-col overflow-x-hidden bg-black text-white">
            <StartCanvas/>
            <Header />

            <div className="relative w-full min-h-screen px-6 z-10 md:px-12 lg:px-24 flex justify-center items-center mt-10">
                <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 h-full text-center md:text-left">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
                            A New Home For <br className="hidden md:block" /> Game Lovers
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300 tracking-wide mt-4">
                            asfayuufhidgysugh asdgh
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-5 px-5 py-2 border border-cyan-400 rounded font-bold text-white tracking-wide hover:bg-cyan-400 hover:text-[#050e2d] hover:shadow-[0_0_10px_#1aeeef]"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-[500px] flex justify-center">
                        <img
                            src={assassinImg}
                            alt="Assassin"
                            className="w-[300px] sm:w-[400px] md:w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
