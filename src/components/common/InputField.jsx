import React from 'react'
import { ErrorMessage, useField } from "formik";

const InputField = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  // console.log(meta, field);

  return (
    <>
      <div className="container mx-auto">
        <label className="text-1xl font-semibold font-medium text-gray-900 dark:text-black" htmlFor='{field.name}'>{label}</label>
        <input
          autoComplete="off"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
        />
        <ErrorMessage component="div" name={field.name} className='error' />
      </div>
    </>
  );
}

export default InputField;
