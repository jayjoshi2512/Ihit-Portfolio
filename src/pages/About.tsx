import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React.js",
    "Node.js",
    "Python",
    "UI/UX Design",
    "Three.js",
    "TailwindCSS",
    "Git"
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-300 mb-6">
                I'm a Computer Science & Design student at G.H. Patel College of Engineering and Technology,
                passionate about creating beautiful and functional digital experiences. I combine technical
                expertise with design thinking to build innovative solutions.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800 p-3 rounded-lg text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;