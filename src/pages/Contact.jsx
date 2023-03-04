import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="p-8 flex justify-center items-center h-full w-full">
      <div>
        {/* render ContactForm component */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
