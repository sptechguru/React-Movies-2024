import { NavLink } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';
import InputField from '../components/common/InputField';



const Login = () => {

  const validateLogin = Yup.object({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    pass: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  })
  return (



    <div className="container mx-auto py-5 shadow-lg rounded">
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-black text-center py-2"> Login Page</h1>
        <Formik
          initialValues={{
            userName: '',
            email: '',
            mobile: '',
            pass: '',
            cpass: ''
          }}

          validationSchema={validateLogin}

          onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
          }}
        >

          {formik => (
            <Form>
              <InputField label="Enter Your Name" name="userName" type="text" />
              <InputField label="Enter Your Phone Number" name="pass" type="text" />
              <div className="text-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                <br />
                <br />

                <NavLink className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" to="/signup">Create New Accounts ??..</NavLink>


              </div>
            </Form>
          )}
        </Formik>

    </div>
  );

};

export default Login;
