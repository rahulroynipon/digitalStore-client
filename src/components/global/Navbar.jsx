import { AiOutlineHome } from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItem = [
    {
      label: "Home",
      icon: <AiOutlineHome size={25} />,
    },
    {
      label: "Shop",
      icon: <IoGridOutline size={25} />,
    },
    {
      label: "Cart",
      icon: <MdAddShoppingCart size={25} />,
    },
    {
      label: "Account",
      icon: <LuUserRound size={25} />,
    },
  ];
  return (
    <motion.section
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className=" md:hidden bg-white fixed bottom-0 left-0 right-0 z-40 shadow-2xl border-t"
    >
      <div className="padding-x">
        <ul className="width flex text-gray-900 py-3">
          {navItem?.map((item, index) => (
            <li className="flex flex-col justify-between w-full items-center">
              <div>{item?.icon}</div>
              <p className="text-sm mt-1">{item?.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
