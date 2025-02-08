import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, User, FolderKanban, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', icon: <Code2 className="w-5 h-5" />, label: 'Home' },
    { path: '/about', icon: <User className="w-5 h-5" />, label: 'About' },
    { path: '/projects', icon: <FolderKanban className="w-5 h-5" />, label: 'Projects' },
    { path: '/contact', icon: <Mail className="w-5 h-5" />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Ihit Joshi
          </Link>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-3 py-2 rounded-md text-sm font-medium hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-2">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;