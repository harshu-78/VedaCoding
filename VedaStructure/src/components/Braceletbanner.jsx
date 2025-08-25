import { motion } from "framer-motion";

export default function BraceletBanner() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 blur-3xl opacity-30 animate-pulse"></div>

      {/* Floating Bracelet */}
      <motion.img
        src="/images/brace.png" 
        alt="Spiritual Bracelet"
        className="relative z-10 w-80 drop-shadow-2xl"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: [0, -15, 0], scale: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <motion.div
        className="absolute bottom-20 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg">
          Spiritual Bracelets
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Balance your energy, embrace divinity ✨
        </p>
      </motion.div>
    </section>
  );
}
