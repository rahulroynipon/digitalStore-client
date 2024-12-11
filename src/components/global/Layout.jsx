import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./../../lib/utils";
import arrow from "./../../assets/whiteArrow.svg";

export default function Layout() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { categories = [] } = useSelector((state) => state.category);

  const navLinks = [
    { label: "Home" },
    { label: "Shop" },
    { label: "Compare" },
    { label: "Customer Support" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const sideMenuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <>
      {/* Pass the toggle state and function to Header */}
      <Header isOpen={isMobileMenuOpen} setOpen={setIsMobileMenuOpen} />

      {/* Desktop Navigation */}
      <section className="padding-x border-b bg-white relative hidden md:block z-10">
        <ul className="flex items-center space-x-7 width py-3">
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="bg-orange-500 text-white px-4 py-2 flex items-center space-x-2"
            >
              <p>All Categories</p>
              <span
                className={cn(
                  "transition-transform duration-300",
                  isDropdownOpen ? "rotate-0" : "rotate-180"
                )}
              >
                <img src={arrow} alt="arrow" />
              </span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute bg-white px-6 py-3 border mt-2 shadow-2xl z-20 max-h-[25rem] overflow-auto"
                >
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 hover:text-orange-500 text-nowrap"
                    >
                      {item.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {navLinks.map((item, index) => (
            <li key={index} className="hover:text-orange-500">
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Mobile Navigation */}
      <section className="padding-x border-b bg-white relative md:hidden z-20">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sideMenuVariants}
              className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-30 p-6"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-orange-500"
              >
                Close
              </button>
              <ul className="mt-4">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className="mb-2 hover:text-orange-500 text-nowrap"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 border-t pt-4">
                {navLinks.map((item, index) => (
                  <li key={index} className="mb-2 hover:text-orange-500">
                    {item.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Outlet />
      <Navbar />
    </>
  );
}
