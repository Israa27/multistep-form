import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPersonalData, setActiveIndex, selectPersonalData } from '../redux/menuSlice';
import Header from '../components/Header';
import NextButton from '../components/NextButton';

export default function InfoPage() {
  const navigate = useNavigate(); // Hook for navigating between pages
  const dispatch = useDispatch(); // Hook for dispatching Redux actions
  const personalData = useSelector(selectPersonalData); // Select personal data from Redux store

  const inputValues = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'e.g. Stephen King',
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
    },
    {
      label: 'Phone Number',
      name: 'phone',
      type: 'number',
      placeholder: 'e.g. +1 234 567 890',
    },
  ];

  // State to manage form errors
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // State to manage form input values
  const [values, setValues] = useState(personalData);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Flag to track if there are errors
    let hasErrors = false;

    // Clear all previous errors
    setErrors({
      name: '',
      email: '',
      phone: '',
    });

    // Check if any of the input fields are empty
    inputValues.forEach((item) => {
      if (!values[item.name]) {
        setErrors({ ...errors, [item.name]: 'This field is required' });
        hasErrors = true;
      }
    });

    // If there are errors, do not proceed
    if (hasErrors) {
      return;
    }

    // Dispatch the personal data to Redux store and navigate to the next page
    dispatch(getPersonalData(values));
    dispatch(setActiveIndex(1));
    navigate('/select-plan');
  };

  // Function to handle input changes
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // Function to handle input blur events and validate the input
  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Check for validation based on the field's name
    switch (name) {
      case 'name':
        if (!value) {
          setErrors({ ...errors, name: 'Enter your name' });
        } else {
          setErrors({ ...errors, name: '' });
        }
        break;
      case 'email':
        if (!value) {
          setErrors({ ...errors, email: 'Enter email' });
        } else {
          setErrors({ ...errors, email: '' });
        }
        break;
      case 'phone':
        if (!value) {
          setErrors({ ...errors, phone: 'Enter the phone number' });
        } else {
          setErrors({ ...errors, phone: '' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='info'>
      <Header mainHeader='Personal info' text='Please provide your name, email address, and phone number.' />

      <div className='mt-[2rem] desktop:w-[33rem] mobile:w-[20rem]'>
        <form onSubmit={handleSubmit}>
          {inputValues.map((item, index) => (
            <div className='input-group desktop:p-0 mobile:p-[10px]' key={index}>
              <div className='flex desktop:w-[33rem] justify-between mobile:w-[20rem]'>
                <label className='mb-1 text-marine-blue font-bold' htmlFor={item.name}>
                  {item.label}
                </label>
                <span
                  className={`text-red-500 font-bold ${
                    !values[item.name] && errors[item.name] ? '' : 'hidden'
                  }`}
                >
                  {errors[item.name]}
                </span>
              </div>
              <input
                className={`font-medium text-marine-blue desktop:w-[33rem] mobile:w-[20rem]
                h-[3rem] rounded-md desktop:mb-6 mobile:mb-2 p-2 outline-marine-blue border-2
                border-light-gray ${!values[item.name] && errors[item.name] ? 'border-red-500' : ''}`}
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={values[item.name]}
                onBlur={handleBlur}
                onChange={onChange}
                required
              />
            </div>
          ))}
          <NextButton onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
