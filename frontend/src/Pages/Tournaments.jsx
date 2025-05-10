import React from "react";
import { motion } from "framer-motion";
import dmc2 from "../img/dmc2.png";
import dt1 from "../img/dt1.jpg";
import fn from "../img/fn.jpg";
import { Link } from 'react-router-dom';

const tournaments = [
    {
        image: dmc2,
        matches: 50,
        states:"In-Progress",
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
    {
        image: dt1,
        matches: 10,
        states: "In-Progress",
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
    {
        image: fn,
        matches: 20,
        states: "In-Progress",
        description: `I recently playing through black box's nfs with keyboard, so far I only have beaten MW05 and Carbon. I have to say, this is still my personal favorite even after all this year. The control is nice,`,
    },
];

const Tournaments = () => {
    return (
        <section id="tournaments" className="w-full min-h-screen px-6 md:px-24 py-10 flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl font-bold mb-6">This Year Tournaments</h2>
            <div className="w-full flex flex-wrap justify-center items-center">
                {tournaments.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
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
                                {t.states}
                            </h4>
                            <p className="text-[#dbd9d9] text-sm mt-3 text-justify">
                                {t.description}
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/application"
                                    className="inline-block px-5 py-2 mt-4 border border-[#1aeeef] text-white font-bold rounded 
                                    hover:bg-[#1aeeef] hover:text-[#050e2d] transition duration-300"
                                >
                                    Join now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Tournaments;
