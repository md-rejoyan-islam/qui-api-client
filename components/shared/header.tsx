"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-screen-w">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          QuizMaster
        </Link>
        <div className="hidden md:flex space-x-5 items-center">
          <NavLinks />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="md:hidden flex items-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 text-gray-600 dark:text-gray-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-md"
        >
          <div className="container mx-auto px-4 py-2 ">
            <NavLinks mobile />
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const pathname = usePathname();

  const links = [
    { id: 1, name: "Home", path: "/", isActive: pathname === "/" },
    {
      id: 2,
      name: "Leaderboard",
      path: "/leaderboard",
      isActive: pathname === "/leaderboard",
    },
    {
      id: 3,
      name: "Performance",
      path: "/performance",
      isActive: pathname === "/performance",
    },
    {
      id: 4,
      name: "Profile",
      path: "/profile",
      isActive: pathname === "/profile",
    },
    { id: 5, name: "Login", path: "/login", isActive: pathname === "/login" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={clsx(
            link.isActive
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block py-2",
            mobile ? "text-lg" : ""
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

const ThemeToggle: React.FC<{
  theme: "light" | "dark";
  toggleTheme: () => void;
}> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
  >
    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
  </button>
);

export default Header;
