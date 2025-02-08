import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Scene3D from '../components/Scene3D';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ihit Joshi
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Computer Science & Design Student
            </motion.p>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              G.H. Patel College of Engineering and Technology
            </motion.p>
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-indigo-600 text-white rounded-full text-lg font-medium hover:bg-indigo-500 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
