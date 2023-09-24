import contact from '../images/contact1.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ahixog', 'template_ox8etxp', form.current, 'vPjzIElkuNlWSGoFI').then(
      (result) => {
        console.log(result.text);
        notify('Email send successfully!');
      },
      (error) => {
        console.log(error.text);
        notify(error.text);
      }
    );
  };

  const notify = (msg) =>
    toast(msg, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <div className="w-[100%] bg-white dark:bg-primary dark:text-white" id="contact">
      <ToastContainer />

      <div>
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl">CONTACT ME</h1>
        <div className="w-[75%] md:w-[50%] pb-20 md:pb-48 mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
          <div>
            <img src={contact} alt="" className="w-auto" />
          </div>
          <div className="text-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  name="user_name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" name="user_email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Message
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="message"
                />
              </div>
              {/* <div>
                <label htmlFor="error" className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">
                  Your name
                </label>
                <input
                  type="text"
                  id="error"
                  className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  placeholder="Error input"
                />
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">Oh, snapp!</span> Some error message.
                </p>
              </div> */}
              <div className="flex items-center">
                <button
                  type="submit"
                  className="mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                <p>Or</p>
                <a
                  href="https://wa.me/+51941105213"
                  className="ml-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Whatsapp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
