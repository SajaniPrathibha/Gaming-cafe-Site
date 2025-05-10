import React,{useState} from 'react';
import Header from '../Components/Header';
import assassinImg from '../assets/assassin2.png';
import StartCanvas from '../Components/Stars';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [btnHover, setBtnHover] = useState(false);
    const [btnHover2, setBtnHover2] = useState(false);
    return (
        <div className="w-full flex flex-col overflow-x-hidden bg-black text-white">
            <StartCanvas/>
            <Header />

            {/* Auth Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="relative w-full max-w-xl p-6 bg-gray-900 rounded-xl text-black shadow-lg">
                        <button
                            onClick={() => setShowModal(false)}
                            onMouseEnter={() => setBtnHover2(true)}
                            onMouseLeave={() => setBtnHover2(false)}
                            style={{
                                backgroundColor: btnHover2 ? '#1aeeef' : 'transparent',
                                color: btnHover2 ? '#050e2d' : '#fff',
                                border: '1px solid #1aeeef',
                            }}
                            className="absolute top-3 right-3 text-white hover:text-red-500 font-bold text-xl"
                        >
                            X
                        </button>
                        <AuthForm />
                    </div>
                </div>
            )}

            <div className="relative w-full min-h-screen px-6 z-10 md:px-12 lg:px-24 flex justify-center items-center mt-10">
                <div className="relative w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center gap-10">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 h-full text-center md:text-left">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
                            A World Made For <br className="hidden md:block" /> Game Lovers
                        </h2>
                        <p className="text-sm sm:text-base text-gray-100 tracking-wide mt-4">
                            Step into the zone where legends are made, battles are won, and gamers unite
                        </p>
                        <button
                            onClick={() => setShowModal(true)}
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                backgroundColor: btnHover ? '#1aeeef' : 'transparent',
                                color: btnHover ? '#050e2d' : '#fff',
                                border: '1px solid #1aeeef',
                            }}
                            >
                            Join Us
                        </button>
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
