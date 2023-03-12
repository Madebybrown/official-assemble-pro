import React from "react";
import ContactForm from "../components/ContactForm";
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 flex justify-center items-center h-full w-full"
    >
      <div>
        {/* render ContactForm component */}
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
