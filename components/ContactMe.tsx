import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import fetchPageInfo from "../utils/fetchPageInfo";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    emailjs
      .sendForm(
        "service_pcexlou",
        "template_lfzw84x",
        formRef.current,
        "pNWrZtVXgDi9ZyOkW"
      )
      .then(
        (result) => {
          toast.success('Email sent successfully!');
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { data, error } = fetchPageInfo();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div></div>;

  return (
    <div
      className="h-screen flex relative text-col text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-5">
        <h4 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center mt-20 ">
          I have got just what you need.{" "}
          <span className="underline decoration-[#4db9ad]/50">Lets Talk.</span>
        </h4>
        <div>
          <div className="space-y-3">
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#4db9ad] h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
              <p className="text-xl md:text-2xl xl:text-2xl">
                {data.phoneNumber}
              </p>
            </div>

            <div className="flex items-center space-x-5 justify-center ">
              <EnvelopeIcon className="text-[#4db9ad] h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
              <p className="text-xl md:text-2xl xl:text-2xl">{data.email}</p>
            </div>

            <div className="flex items-center space-x-5 justify-center ">
              <MapPinIcon className="text-[#4db9ad] h-5 w-5 md:h-6 md:w-6 xl:h-7 xl:w-7 animate-pulse" />
              <p className="text-xl md:text-2xl xl:text-2xl">{data.address}</p>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col space-y-2 w-fit mx-auto mt-5"
          >
            <div className="flex space-x-2">
              <input
                name="user_name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                className="contactInput"
                type="text"
                required
              />
              <input
                name="user_email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                className="contactInput"
                type="text"
                required
              />
            </div>
            <input
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Subject"
              className="contactInput"
              type="text"
              required
            />
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="contactInput"
              required
            />
            <button
              type="submit"
              className="bg-[#4db9ad] py-3 px-5 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
          <ToastContainer theme="dark" />
        </div>
      </div>
    </div>
  );
}
