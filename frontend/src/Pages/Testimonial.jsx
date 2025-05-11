import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
// import gradientBackground from "/assets/images/gradientBackground.webp";

const Testimonials = [
    {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error architecto adipisci laborum harum consequuntur ullam modi cupiditate, nesciunt consectetur dolor fugiat veritatis quae, impedit quod a enim sapiente, placeat provident",
        name: "No Name",
        title: "No title",
        image: "/img/person3.png",
    },
    {
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error architecto adipisci laborum harum consequuntur ullam modi cupiditate, nesciunt consectetur dolor fugiat veritatis quae, impedit quod a enim sapiente, placeat provident",
        name: "No Name",
        title: "No title",
        image: "/img/person4.png",
    },
    // Add more testimonials here...
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");

    const changeSlide = (newDirection) => {
        setDirection(newDirection);
        animateSlideOut();
        setTimeout(() => {
            setCurrentIndex((prevIndex) =>
                newDirection === "left"
                    ? (prevIndex + 1) % Testimonials.length
                    : (prevIndex - 1 + Testimonials.length) % Testimonials.length
            );
            animateSlideIn();
        }, 500);
    };

    const animateSlideOut = () => {
        const xValue = direction === "left" ? -300 : 300;
        gsap.to(".testimonial-slide", { x: xValue, opacity: 0, duration: 0.5 });
    };

    const animateSlideIn = () => {
        const xValue = direction === "left" ? 300 : -300;
        gsap.fromTo(
            ".testimonial-slide",
            { x: xValue, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 }
        );
    };

    useEffect(() => {
        animateSlideIn();
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide("left");
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    

    const currentTestimonial = Testimonials[currentIndex];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-16 gap-20">
            {/* Background Gradient */}
            <div className="absolute left-0 top-0 w-full sm:w-1/2 h-full -z-10 flex justify-center sm:justify-start overflow-hidden">
                {/* <img
                    src={gradientBackground}
                    alt="Gradient Background"
                    className="w-[300px] sm:w-[500px] h-[600px] sm:h-[920px] object-cover"
                /> */}
            </div>

            {/* Carousel Container */}
            <div className="w-full px-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h2 className="text-3xl font-medium mb-10 text-white">What our clients say</h2>

                {/* Testimonial Slide */}
                <div className="testimonial-slide flex flex-col sm:flex-row w-full h-full items-center sm:items-start">
                    <div className="w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0">
                        <img
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="max-h-[300px] md:max-h-[500px] lg:max-h-[700px] object-contain"
                        />
                    </div>

                    <div className="w-full sm:w-[400px] flex flex-col justify-center px-4 sm:pl-8 pt-10 sm:pt-20">
                        <p className="text-sm sm:text-lg font-poppins mb-6 sm:mb-10 mt-6 sm:mt-10 border-l-2 border-white pl-4 sm:pl-8">
                            "{currentTestimonial.text}"
                        </p>
                        <p className="mt-4 text-right font-poppins">
                            {currentTestimonial.name} <br />
                            <span className="text-white text-sm">{currentTestimonial.title}</span>
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center sm:justify-end mt-8 space-x-4">
                    <button
                        onClick={() => changeSlide("right")}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full border border-white text-white text-lg transition duration-200 hover:bg-white hover:text-black"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={() => changeSlide("left")}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full border border-white text-white text-lg transition duration-200 hover:bg-white hover:text-black"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
