import twitter from "./../../assets/twitter.svg";
import facebook from "./../../assets/facebook.svg";
import instragram from "./../../assets/instragram.svg";
import youtube from "./../../assets/youtube.svg";
import whiteLove from "./../../assets/whiteLove.svg";
import whiteCart from "./../../assets/whiteCart.svg";
import person from "./../../assets/person.svg";
import shop from "./../../assets/shop.svg";
import { cn } from "./../../lib/utils";
import { Input } from "../ui/input";

export default function Header() {
  const contact = [
    { image: facebook, alt: "Facebook" },
    { image: instragram, alt: "Instagram" },
    { image: youtube, alt: "YouTube" },
    { image: twitter, alt: "Twitter" },
  ];

  const navItem = [
    { image: whiteCart, alt: "cart" },
    { image: whiteLove, alt: "wishlist" },
    { image: person, alt: "account" },
  ];

  return (
    <header className="bg-header mb-16 text-white">
      <div className="flex flex-col items-center justify-center padding-x">
        <section className="width w-full py-3 flex justify-between items-center text-white">
          <p>Welcome to Digital Store online eCommerce store.</p>

          {/* Social Icons */}
          <ul className="flex items-center space-x-3">
            <li className="mr-2">Follow us:</li>
            {contact?.map((item, index) => (
              <li key={index} className="w-4 h-4">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-slate-400 h-[0.5px] width w-full opacity-50"></div>

        <section className="width w-full py-5 flex justify-between items-center gap-5">
          <div>
            <h2 className=" text-3xl font-bold text-nowrap">Digital Store</h2>
          </div>

          <div>
            <Input
              className="bg-white w-[20rem] rounded-none text-gray-900"
              placeholder="Search for anything..."
              type="search"
            />
          </div>

          <nav className="">
            <ul className="flex items-center space-x-5">
              {navItem?.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "",
                    index + 1 == navItem.length ? "hidden md:block" : "block"
                  )}
                >
                  <img src={item?.image} alt={item?.alt} />
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}
