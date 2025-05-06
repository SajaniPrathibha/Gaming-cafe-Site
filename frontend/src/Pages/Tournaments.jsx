import React from "react";
import dmc2 from "../img/dmc2.png";
import dt1 from "../img/dt1.jpg";
import fn from "../img/fn.jpg";

const tournaments = [
    {
        image: dmc2,
        matches: 50,
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
    {
        image: dt1,
        matches: 10,
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
    {
        image: fn,
        matches: 20,
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
];

const Tournaments = () => {
    return (
        <div className="w-full min-h-screen px-6 md:px-24 py-10 flex flex-col justify-center items-center ">
            <h2 className="text-white text-3xl font-bold mb-6">This Year Tournaments</h2>
            <div className="w-full flex flex-wrap justify-center items-center">
                {tournaments.map((t, index) => (
                    <div
                        key={index}
                        className="w-[300px] md:w-[350px] bg-[#050e2d] rounded-lg overflow-hidden m-4"
                    >
                        <img
                            src={t.image}
                            alt="Tournament"
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="p-4">
                            <h4 className="text-white mt-2">
                                <span className="text-[#1aeeef]">{t.matches} </span>
                                Matches in Progress...
                            </h4>
                            <p className="text-[#dbd9d9] text-sm mt-3 text-justify">
                                {t.description}
                            </p>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-block px-5 py-2 border border-[#1aeeef] text-white font-bold rounded hover:bg-[#1aeeef] hover:text-[#050e2d] hover:shadow-[0_0_10px_#1aeeef] transition duration-300"
                                >
                                    Join now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tournaments;
