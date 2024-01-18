import React from "react";
import InputField from '../components/common/InputField';

const Contact = () => {

  return (
    <div className=" py-3 container mx-auto">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2 my-3"> Contact Us</h1>
      <div className="container max-w-[1320px] mx-auto grid lg:grid-cols-12 md:grid-cols-12 
      sm:grid-cols-12 contact_div">
        <div className="col-span-7 mx-2">

          <form
            action="https://formspree.io/f/mknlgaeg"
            method="POST"
          >

            <div class="form-group">
              <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black">Enter Your Name</label>
              <input
                placeholder="Enter Your Name"
                type="text"
                name="Name"
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-none"
              />
            </div>


            <div class="form-group py-2">
              <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black">Enter Your Email</label>
              <input
                placeholder="Enter Your Email"
                type="email"
                name="Email"
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-none"
              />
            </div>


            <div class="form-group py-2">
              <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black">Enter Your Mobile</label>
              <input
                placeholder="Enter Your Number"
                type="text"
                name="Mobile"
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-none"
              />
            </div>

            <div class="form-group">
              <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black" for="exampleFormControlTextarea1">Message</label>
              <textarea
                name="message"
                className="block font-semibold p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-100"
                rows="3"
              ></textarea>
            </div>
            <br />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>

        <br />

        <div className="col-span-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3679.394570289608!2d75.8395885144931!3d22.750733832143005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s27%2F1%20prince%20nagar%20bangnagnga%20kushwah%20%20nagar!5e0!3m2!1sen!2sin!4v1597738632238!5m2!1sen!2sin"
            style={{
              width: "100%",
              height: "450px",
              border: "2px solid skyblue",
            }}
            allowfullscreen="true"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <br />
      <br />

    </div>
  );
};

export default Contact;
