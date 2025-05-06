import React from 'react';
import Tilt from 'react-parallax-tilt';

const GameCard = ({ title, category, image, onInfoClick }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            transitionSpeed={400}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            className="w-48 bg-[#1b2141] rounded-lg overflow-hidden m-5 transform transition duration-150 active:scale-95"
        >
            <img src={image} alt={title} className="h-64 w-full object-cover" />
            <div className="p-3">
                <h4 className="text-white mb-3">{title}</h4>
                <div className="relative w-full h-2 bg-[#35407e] rounded mb-4">
                    <span className="absolute h-full w-4/5 bg-[#1aeeef] rounded"></span>
                </div>
                <div className="border-t-2 border-[#35407e] pt-2 flex justify-between items-center">
                    <p className="text-white text-sm">{category}</p>
                    <button
                        onClick={onInfoClick}
                        className="text-sm font-bold border border-[#1aeeef] text-white px-3 py-1 rounded hover:bg-[#1aeeef] hover:text-[#050e2d] shadow hover:shadow-cyan-500"
                    >
                        Info
                    </button>
                </div>
            </div>
        </Tilt>
    );
};

export default GameCard;
