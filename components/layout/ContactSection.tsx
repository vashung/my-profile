import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedInIcon from "../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact" className="mt-8">
      <h2 className="text-white text-5xl font-bold mb-4">Contact</h2>
      
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
          <h2 className="text-[#57595a] text-5xl font-bold mb-4">Lets Contact</h2>
          <p className="text-[#afb1b3] mb-3 max-w-md">
            {""} I m currently looking for new opportunities mY inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll try
            my best to get back to you.
          </p>

          <div className="socials flex flex-row gap-2">
            <Link href="github.com">
              <Image src={GithubIcon} alt="github Icon" />
            </Link>

            <Link href="linkedin.com">
              <Image src={LinkedInIcon} alt="linkedIn Icon" />
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                typeof="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="jacob@gmail.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                typeof="text"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="jacob@gmail.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                typeof="text"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Let's talk about ..."
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 py-3 text-white font-medium rounded-lg w-full"
            >
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
