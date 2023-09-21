import React from 'react';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddOns, removeSelectAddOns, setActiveIndex } from '../redux/menuSlice';

export default function AddOnsPage() {
  const navigate = useNavigate(); // Hook for navigating between pages
  const dispatch = useDispatch(); // Hook for dispatching Redux actions
  const buttonValue = useSelector((state) => state.menu.selectedBillingFrequency); // Select billing frequency from Redux store
  const selectedAddOns = useSelector((state) => state.menu.addOnsItems); // Select selected add-ons from Redux store

  const values = [
    {
      name: 'Online Service',
      text: 'Access to multiplayer games',
      price: '+$1/mo',
      priceYearly:'+$10/yr'
    },
    {
      name: 'Larger Storage',
      text: 'Extra 1TB of cloud save',
      price: '+$2/mo',
      priceYearly:'+$20/yr'
    },
    {
      name: 'Customizable Profile',
      text: 'Custom theme on your profile',
      price: '+$2/mo',
      priceYearly:'+$20/yr'
    },
  ];

  // Function to handle checking/unchecking add-ons
  const handleCheck = (item) => {
    if (selectedAddOns && selectedAddOns.find((addon) => addon.name === item.name)) {
      // If the add-on is already selected, remove it
      dispatch(removeSelectAddOns(item));
    } else {
      // If the add-on is not selected or selectedAddOns is undefined, add it
      dispatch(selectAddOns(item));
    }
  };

  // Function to navigate back to the previous page
  const navigateBack = () => {
    dispatch(setActiveIndex(1)); // Set the active index in Redux store to navigate back to the Select Plan page
    navigate('/select-plan'); // Navigate to the Select Plan page
  };

  // Function to handle clicking the "Next" button
  const handleSelectAddOns = () => {
    dispatch(setActiveIndex(3)); // Set the active index in Redux store to navigate to the Summary page
    navigate('/summary'); // Navigate to the Summary page
  };

  return (
    <div className=''>
      <Header mainHeader='Pick add-ons' text='Add-ons help enhance your gaming experience.' />
      <div className='desktop:mt-6 mobile:m-2'>
        {values.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between mb-4 p-4 desktop:w-[36rem] mobile:w-[20rem] h-[4rem] rounded-md border-2 border-pastel-blue cursor-pointer ${
              selectedAddOns.find((addon) => addon.name === item.name) ? 'bg-magnolia' : ''
            }`}
            onClick={() => handleCheck(item)}
          >
            <div className='flex justify-between items-center'>
              <input
                type='checkbox'
                className='w-[1.2rem] h-[1.2rem] border-2 border-cool-gray'
                checked={selectedAddOns.find((addon) => addon.name === item.name) !== undefined}
                onChange={() => {}}
              />
              <div className='ml-4'>
                <span className='font-bold text-marine-blue'>{item.name}</span>
                <p className='text-cool-gray font-medium desktop:text-sm mobile:text-xs'>{item.text}</p>
              </div>
            </div>
            <span className='text-purplish-blue font-medium'>{buttonValue=== 'yearly'? item.priceYearly:item.price}</span>
          </div>
        ))}
      </div>
      <div className='desktop:w-[36rem]  mobile:w-[20.5rem] flex justify-between items-center'>
        <span className='text-cool-gray desktop:ml-0 mobile:ml-4 font-bold hover:text-purplish-blue cursor-pointer' onClick={navigateBack}>
          Go Back
        </span>
        <NextButton onClick={handleSelectAddOns} />
      </div>
    </div>
  );
}

