import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Basic Plan",
      price: "$1.99",
      matches: "10 Matches Included",
      features: [
        "Access to casual tournaments",
        "Standard support",
        "Basic matchmaking",
      ],
      highlight: false,
    },
    {
      title: "Pro Plan",
      price: "$9.99",
      matches: "Unlimited Matches",
      features: [
        "Premium tournaments",
        "Priority support",
        "Advanced matchmaking",
      ],
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="min-h-screen py-10 px-4 md:px-24 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Choose Your Plan</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {pricingOptions.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ x: index === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`w-full md:w-[350px] bg-[#050e2d] rounded-xl p-6 shadow-lg transition hover:shadow-[0_0_15px_#1aeeef] ${plan.highlight ? "border-2 border-[#1aeeef]" : ""}`}
          >
            <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
            <p className="text-cyan-400 text-xl mb-2">{plan.price}</p>
            <p className="text-gray-300 mb-4">{plan.matches}</p>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 text-gray-200">• {feature}</li>
              ))}
            </ul>
            <Link
              to="/application"
              className="inline-block px-5 py-2 mt-4 border border-[#1aeeef] text-white font-bold rounded hover:bg-[#1aeeef] hover:text-[#050e2d] transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
