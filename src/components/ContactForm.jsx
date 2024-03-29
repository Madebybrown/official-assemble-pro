import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // Use useForm to initialize form and handle submit
  const [state, handleSubmit] = useForm("xbjeokdb");

  // If form submission is successful, render success message
  if (state.succeeded) {
    return <p>Thanks for you feedback!</p>;
  }
  return (
    <div>
      <section className="bg-gray-100 p-6 rounded-xl">
        <div className="px-4 py-2 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about how{" "}
            <span className="font-bold">AssemblePro</span> works? Let us know.
          </p>
          {/* Form section */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Label & input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Enter Email"
                required
              />
            </div>

            {/* Validation error for email input */}
            <div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Message Label & input */}
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave your feedback..."
                required
              />

              {/* Validation error for message input */}
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit button */}
            <div className="w-full">
              <button
                type="submit"
                disabled={state.submitting}
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg w-full bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
