import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import InputField from '../components/common/InputField';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = () => {

  const validateSignup = Yup.object({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    pass: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    cpass: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  })
  return (
    <div className=" container py-5 shadow-lg rounded mx-auto" >
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2 my-3"> Signup</h1>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          mobile: '',
          pass: '',
          cpass: ''
        }}

        validationSchema={validateSignup}

        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
      >

        {formik => (
          <Form>
            <InputField label="Enter Your Name" name="userName" type="text" />
            <InputField label="Enter Your Phone Number" name="mobile" type="text" />
            <InputField label="Email address" name="email" type="email" />
            <InputField label="Enter Your Password" name="pass" type="text" />
            <InputField label="Confirm Password" name="cpass" type="email" />
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
              <br/>
              <br/>

              <NavLink className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to="/login">Already Have Accounts ??..</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
