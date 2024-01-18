import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';
import InputField from '../components/common/InputField';

const ContactFormic_Validation = () => {
  const validate = Yup.object({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    mobileNumber: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  })

  return (
    <div className=" py-3 container mx-auto">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2 my-3"> Contact Us</h1>
      <div className="container max-w-[1320px] mx-auto grid lg:grid-cols-12 md:grid-cols-12 
      sm:grid-cols-12 contact_div">
        <div className="col-span-7 mx-2">
          <Formik
            initialValues={{
              userName: '',
              mobileNumber: '',
              email: '',
              message: ''
            }}

            validationSchema={validate}

            onSubmit={fields => {
              alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
          >

            {formik => (
              <Form>
                
                <InputField label="Enter Your Name" name="userName" type="text" />
                <InputField label="Enter Your Phone Number" name="mobileNumber" type="text" />
                <InputField label="Email address" name="email" type="email" />

                <div class="form-group">
                  <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black" for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    name="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-100"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <ErrorMessage name="message" component="div" className="invalid-feedback" />
                </div>
                <br />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </Form>
            )}
          </Formik>
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
      <br/>
      <br/>

    </div>
  );
};

export default ContactFormic_Validation;
