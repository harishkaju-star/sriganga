
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center">
        {/* Animated Logo / Icon */}
        <div className="relative mb-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-20 h-20 rounded-full border-4 border-red-600 border-t-blue-900 shadow-2xl flex items-center justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-900 to-red-600" />
          </motion.div>
          {/* Pulsing rings around the logo */}
          <motion.div
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-red-100 -z-10"
          />
        </div>

        {/* Text Loader */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-black tracking-tight"
          >
            <span className="text-blue-900">Sri Ganga</span>
            <span className="text-red-600 ml-1">Trading Co</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-bold text-gray-400 uppercase tracking-[0.5em] mt-3"
          >
            Precision Threads
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
          <motion.div
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-900"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
