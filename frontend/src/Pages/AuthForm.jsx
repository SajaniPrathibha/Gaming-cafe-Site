import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [btnHover, setBtnHover] = useState(false);
    const [btnHover2, setBtnHover2] = useState(false);

    const variants = {
        initial: (direction) => ({
            x: direction === "left" ? 300 : -300,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction) => ({
            x: direction === "left" ? -300 : 300,
            opacity: 0,
            transition: { duration: 0.5 },
        }),
    };

    return (
        <div className="w-full px-4 py-6 bg-gray-900 rounded-lg shadow-lg text-white max-w-md mx-auto relative overflow-hidden min-h-[470px]">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
                {isLogin ? "Welcome Back!" : "Create Account"}
            </h2>

            <AnimatePresence custom={isLogin ? "left" : "right"} mode="wait">
                {isLogin ? (
                    <motion.form
                        key="login"
                        custom="left"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="space-y-5 absolute w-full"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <p className="text-sm text-center text-gray-400">
                            <Link href="/forgot-password" className="text-white mr-10 hover:underline">
                                Forgot Password?
                            </Link>
                        </p>
                        <button
                            type="submit"
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                backgroundColor: btnHover ? '#1aeeef' : 'transparent',
                                color: btnHover ? '#050e2d' : '#fff',
                                border: '1px solid #1aeeef',
                            }}
                            className="w-full py-2 max-w-[85%] rounded-lg transition"
                        >
                            Login
                        </button>
                    </motion.form>
                ) : (
                    <motion.form
                        key="register"
                        custom="right"
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="space-y-5 absolute w-full"
                    >
                        <input
                            type="text"
                            placeholder="Full Name"
                                className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                                className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                                className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                                className="w-full px-4 max-w-[85%] py-2 border border-[#1aeeef] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <button
                            type="submit"
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            style={{
                                backgroundColor: btnHover ? '#1aeeef' : 'transparent',
                                color: btnHover ? '#050e2d' : '#fff',
                                border: '1px solid #1aeeef',
                            }}
                                className="w-full py-2 max-w-[85%] rounded-lg transition"
                        >
                            Register
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

            <p className="mt-4 text-sm text-gray-400 text-center absolute bottom-4 w-full">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                    onClick={() => setIsLogin(!isLogin)}
                    onMouseEnter={() => setBtnHover2(true)}
                    onMouseLeave={() => setBtnHover2(false)}
                    style={{
                        backgroundColor: btnHover2 ? '#1aeeef' : 'transparent',
                        color: btnHover2 ? '#050e2d' : '#fff',
                        border: '1px solid #1aeeef',
                    }}
                    className="text-white max-w-[85%]  font-semibold "
                >
                    {isLogin ? "Register" : "Login"}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;
