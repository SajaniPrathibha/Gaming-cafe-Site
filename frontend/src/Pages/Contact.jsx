import React from "react";
import contactImg from "../img/am.jpg"; // Place your image in /src/assets

const Contact = () => {
    return (
        <div className="w-full min-h-[50vh] px-6 md:px-24 py-10 flex flex-col md:flex-row justify-center items-center">
            <img
                src={contactImg}
                alt="Contact"
                className="w-full md:w-1/2 h-full object-cover rounded-lg mb-6 md:mb-0"
            />

            <div className="w-full md:w-1/2 md:ml-8">
                <h1 className="text-white text-3xl font-bold mb-6">Contact Us</h1>

                <div className="space-y-4">
                    <div className="text-white">
                        <p className="mb-1">Enter name</p>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-[#1b2141] text-white text-lg outline-none"
                        />
                    </div>

                    <div className="text-white">
                        <p className="mb-1">Email</p>
                        <input
                            type="text"
                            placeholder="Email"
                            className="w-full p-3 rounded bg-[#1b2141] text-white text-lg outline-none"
                        />
                    </div>

                    <div className="text-white">
                        <p className="mb-1">Message</p>
                        <textarea
                            placeholder="type here..."
                            className="w-full p-3 rounded bg-[#1b2141] text-white text-lg outline-none h-32"
                        ></textarea>
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="px-6 py-2 border border-[#1aeeef] text-white font-bold rounded hover:bg-[#1aeeef] hover:text-[#050e2d] hover:shadow-[0_0_10px_#1aeeef] transition duration-300 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
