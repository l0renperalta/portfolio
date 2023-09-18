import contact from '../images/contact1.png';

const Contact = () => {
  return (
    <div className="w-screen bg-primary text-white" id="contact">
      <div className="w-[70%] mx-auto mb-80 h-[80%] flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-10 font-semibold text-center md:text-4xl">CONTACT ME</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img src={contact} alt="" className="w-auto" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p>Name</p>
              <input type="text" className="w-4/5 h-10" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" className="w-4/5 h-10" />
            </div>
            <div>
              <p>Message</p>
              <textarea name="" id="" cols="70" rows="12" className="resize-none"></textarea>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ">Submit</button>
              </div>
              <p>or</p>
              <div>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 ">Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
