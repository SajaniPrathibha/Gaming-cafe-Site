import { useState } from "react";
import games from "../data/games";
import GameCard from "../Components/GameCard";

const categories = ["All", "Action", "Adventure", "Sports", "Racing"];

const GameSection = () => {
    const [filter, setFilter] = useState("All");
    const [selectedGame, setSelectedGame] = useState(null);

    const filteredGames = filter === "All" ? games : games.filter(game => game.category === filter);

    return (
        <div className="w-full min-h-screen bg-black text-white px-10 py-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6">Available Games</h2>

            <ul className="flex flex-wrap justify-center mb-8">
                {categories.map(cat => (
                    <li
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`cursor-pointer px-5 py-2 m-2 rounded ${filter === cat
                                ? "bg-[#1aeeef] text-[#050e2d] shadow shadow-cyan-400"
                                : "text-white hover:bg-[#1aeeef33]"
                            }`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap justify-center items-start">
                {filteredGames.map((game, index) => (
                    <GameCard key={index} {...game} onInfoClick={() => setSelectedGame(game)} />
                ))}
                {selectedGame && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                        <div className="bg-[#1b2141] text-white rounded-lg p-6 w-[90%] max-w-md relative shadow-xl border border-cyan-400">
                            <button
                                onClick={() => setSelectedGame(null)}
                                className="absolute top-2 right-2 text-white text-xl"
                            >
                                &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-3">{selectedGame.title}</h2>
                            <p className="mb-4">{selectedGame.description || "No description available."}</p>
                            <img src={selectedGame.image} alt={selectedGame.title} className="w-full h-48 object-cover rounded" />
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default GameSection;
