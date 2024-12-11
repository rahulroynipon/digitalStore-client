import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import whiteLove from "./../../assets/whiteLove.svg";
import whiteCart from "./../../assets/whiteCart.svg";
import person from "./../../assets/person.svg";
import search from "./../../assets/search.svg";
import whiteSearch from "./../../assets/whiteSearch.svg";
import menu from "./../../assets/menu.svg";
import { cn } from "./../../lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Header({ isOpen, setOpen }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileSearchVisible, setMobileSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "w-full z-40 bg-header text-white",
        isSticky ? "sticky top-0" : "relative"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div className="padding-x">
        <section className="width w-full py-2 md:py-5 flex justify-between items-center space-x-8 relative">
          {/* Mobile Menu and Search Bar */}
          <div className="md:hidden">
            <button onClick={() => setOpen((prev) => !prev)}>
              <img src={menu} alt="menu" />
            </button>

            {isMobileSearchVisible && (
              <div className="flex absolute left-0 right-0 mt-5 border bg-white shadow-lg">
                <Input
                  className="rounded-none border-none focus:outline-none text-gray-900 w-full py-3"
                  placeholder="Search for anything..."
                  type="search"
                  aria-label="Search"
                />
                <Button
                  className="bg-white rounded-none hover:bg-white pl-0 pr-3"
                  aria-label="Search"
                >
                  <img src={search} alt="Search icon" />
                </Button>
              </div>
            )}
          </div>

          {/* Logo */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold whitespace-nowrap relative md:-left-8">
              Digital Store
            </h1>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center min-w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[40rem]">
            <Input
              className="bg-white rounded-none border-none focus:outline-none text-gray-900"
              placeholder="Search for anything..."
              type="search"
              aria-label="Search"
            />
            <Button
              className="bg-white rounded-none hover:bg-slate-50 pl-0 pr-3"
              aria-label="Search"
            >
              <img src={search} alt="Search icon" />
            </Button>
          </div>

          {/* Navigation Icons */}
          <nav aria-label="User Navigation" className="shrink-0">
            <ul className="flex items-center space-x-4 md:space-x-5">
              <li className="hidden md:block">
                <img src={whiteCart} alt="Cart" />
              </li>
              <li>
                <img src={whiteLove} alt="Wishlist" />
              </li>

              <li
                className="block md:hidden"
                onClick={() => setMobileSearchVisible((prev) => !prev)}
              >
                <img src={whiteSearch} alt="Search icon" />
              </li>

              <li className="hidden md:block">
                <img src={person} alt="Account" />
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </motion.header>
  );
}
