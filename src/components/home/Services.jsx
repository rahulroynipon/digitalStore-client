import delivery from "./../../assets/delivery.svg";
import payment from "./../../assets/payment.svg";
import support from "./../../assets/support.svg";
import returns from "./../../assets/return.svg";
import { cn } from "./../../lib/utils";
import { motion } from "framer-motion";
import { CardAnimationVariants } from "./../../motion";

export default function Services() {
  const serviceHeader = [
    {
      image: delivery,
      label: "Fastest Delivery",
      describe: "Delivery in 24 hours",
    },
    {
      image: returns,
      label: "24 Hours Return",
      describe: "100% money-back guarantee",
    },
    {
      image: payment,
      label: "Secure Payment",
      describe: "Your money is safe",
    },
    {
      image: support,
      label: "Support 24/7",
      describe: "Live contact/message",
    },
  ];

  return (
    <motion.section
      variants={CardAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="border rounded p-3 padding-x mt-16"
    >
      <ul className=" grid md:grid-cols-2 lg:grid-cols-4">
        {serviceHeader.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center lg:justify-center gap-3 py-4",
              index < serviceHeader.length - 1 ? "lg:border-r" : ""
            )}
          >
            <div className="flex-shrink-0">
              <img src={item.image} alt={item.label} className="w-10 h-10" />
            </div>
            <div>
              <p className="leading-5">
                <span className="text-gray-900 uppercase font-medium">
                  {item.label}
                </span>
                <br />
                <span className="text-gray-600 text-sm">{item.describe}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
