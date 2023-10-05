import contactImg from '../images/contact1.png';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({ user_name: '', email: '', message: '' });
  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true });

  const sendEmail = (e) => {
    e.preventDefault();
    if (data.user_name === '' || data.email === '' || data.message === '') {
      notify('complete los campos');
      return;
    }

    emailjs.sendForm('service_2ahixog', 'template_ox8etxp', form.current, 'vPjzIElkuNlWSGoFI').then(
      (result) => {
        console.log(result.text);
        notify('Email send successfully!');
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        notify(error.text);
      }
    );
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
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
    <div className="w-[100%]" id="contact">
      <ToastContainer />

      <div>
        <h1 className="text-3xl mb-16 font-bold text-center md:text-4xl" onClick={() => form.target.reset()}>
          {contact.title}
        </h1>
        <div className="w-[75%] md:w-[50%] pb-20 md:pb-48 mx-auto grid sm:grid-cols-1 md:grid-cols-2 text-center content-center">
          <div>
            <img src={contactImg} alt="" className="w-auto" />
          </div>
          <div className="text-left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {contact.form[0]}
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  name="user_name"
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" name="user_email">
                  {contact.form[1]}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  onChange={inputHandler}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {contact.form[2]}
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="message"
                  onChange={inputHandler}
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
                  {contact.form[3]}
                </button>
                <p>Or</p>
                <a
                  href="https://wa.me/+51941105213"
                  className="ml-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  {contact.form[4]}
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
