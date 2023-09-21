import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPlan, selectBillingFrequency, setActiveIndex } from '../redux/menuSlice';
import Header from '../components/Header';
import img from '../assets/images/icon-arcade.svg';
import img2 from '../assets/images/icon-advanced.svg';
import img3 from '../assets/images/icon-pro.svg';
import NextButton from '../components/NextButton';

export default function SelectPlanPage() {
  const navigate = useNavigate(); // Hook for navigating between pages
  const dispatch = useDispatch(); // Hook for dispatching Redux actions
  const activeItem = useSelector((state) => state.menu.selectedPlan) || ''; // Select the active plan from Redux store
  const billingFrequency = useSelector((state) => state.menu.selectedBillingFrequency); // Select billing frequency from Redux store
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error messages

  const values = [
    {
      name: 'Arcade',
      image: img,
      price: '$9/mo',
      priceYearly: '$90/yr',
    },
    {
      name: 'Advance',
      image: img2,
      price: '$12/mo',
      priceYearly: '$120/yr',
    },
    {
      name: 'Pro',
      image: img3,
      price: '$15/mo',
      priceYearly: '$150/yr',
    },
  ];

  // Function to handle changing billing frequency (monthly/yearly)
  const handleChangeButton = (e) => {
    const newValue = e.target.checked ? 'yearly' : 'monthly';
    dispatch(selectBillingFrequency(newValue));
  };

  // Function to handle selecting a plan
  const handleSelectPlan = () => {
    if (activeItem === '') {
      setErrorMessage('Please select a plan'); // Show error message if no plan is selected
    } else {
      setErrorMessage('');
      dispatch(setActiveIndex(2));
      navigate('/add-ons'); // Navigate to the next page
    }
  };

  // Function to navigate back to the previous page
  const navigateBack = () => {
    dispatch(setActiveIndex(0));
    navigate('/');
  };

  // Function to handle adding a plan
  const handleAddPlan = (plan) => {
    dispatch(selectPlan(plan));
  };

  return (
    <div className='flex flex-col items-start desktop:h-[30rem] mobile:h-auto justify-between desktop:mx-0 mobile:mx-2'>
      <Header mainHeader='Select your plan' text='You have the option of monthly or yearly billing.' />
      <div className='flex justify-between desktop:flex-row desktop:mx-0 mobile:flex-col mobile:mx-2'>
        {values.map((item, index) => (
          <div
            className={`desktop:w-[180px]  desktop:h-[190px] mobile:w-[310px] mobile:h-[100px] 
            p-4 mr-4 rounded-md border-2 flex desktop:flex-col mobile:flex-row mobile:justify-start 
            desktop:justify-between mobile:mb-2
            transition-all duration-300 ease-in-out cursor-pointer ${
              activeItem.name === item.name ? 'border-pastel-blue bg-magnolia' : 'border-cool-gray'
            }`}
            key={index}
            onClick={() => { handleAddPlan(item) }}
          >
            <img src={item.image} alt='icon' className='w-[50px] h-[50px]' />
            <div className='flex flex-col desktop:ml-0 mobile:ml-3'>
              <h3 className='text-lg font-bold text-marine-blue'>{item.name}</h3>
              <span className='text-cool-gray font-bold'>
                {billingFrequency === 'yearly' ? item.priceYearly : item.price}
              </span>
              {billingFrequency === 'yearly' && (
                <span className='font-medium text-marine-blue desktop:mt-2 mobile:mt-1'>
                  2 months free
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <span className='desktop:w-[36rem] text-red-500 mobile:w-[20rem] font-medium text-center'>{activeItem ===''?errorMessage:''}</span>

      <div className='bg-magnolia flex flex-row desktop:w-[36rem] mobile:w-[20rem] mt-6 h-[3rem]  rounded-md justify-center items-center'>
        <span className={`font-medium ${billingFrequency === 'monthly' ? 'text-marine-blue' : 'text-cool-gray'}`}>
          monthly
        </span>
        <label
          htmlFor='check'
          className={`cursor-pointer mx-4 bg-marine-blue relative w-[40px] h-[20px] rounded-full`}
        >
          <input
            type='checkbox'
            id='check'
            className='sr-only peer'
            onChange={handleChangeButton}
            checked={billingFrequency === 'yearly'}
          />
          <span
            className={`w-[14px] h-[14px] bg-white absolute rounded-full left-1 top-[3px] transition-all duration-700 ease-in-out ${
              billingFrequency === 'yearly' ? 'peer-checked:left-[22px]' : ''
            }`}
          ></span>
        </label>
        <span className={`font-medium ${billingFrequency === 'yearly' ? 'text-marine-blue' : 'text-cool-gray'}`}>
          yearly
        </span>
      </div>
      <div className='desktop:w-[36rem]  desktop:mt-0 mobile:w-[20rem] mobile:mt-2  flex justify-between items-center'>
        <span className='text-cool-gray font-bold hover:text-purplish-blue cursor-pointer' onClick={navigateBack}>
          Go Back
        </span>
        <NextButton onClick={handleSelectPlan} />
      </div>
    </div>
  );
}
