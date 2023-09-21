import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveIndex } from '../redux/menuSlice';
import NextButton from '../components/NextButton';

export default function SummaryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const planItem = useSelector((state) => state.menu.selectedPlan);
  
  // Select billing frequency and add-ons from Redux store
  const buttonValue = useSelector((state) => state.menu.selectedBillingFrequency);
  const addOnsItems = useSelector((state) => state.menu.addOnsItems);

  // Calculate the total cost based on selected add-ons and billing frequency
  const total = addOnsItems.reduce(
    (total, addOn) =>
      total + (buttonValue === 'yearly' ? Number(addOn.priceYearly.match(/\d+/g)) : Number(addOn.price.match(/\d+/g))),
    0
  );

  // Function to navigate back to the add-ons page
  const navigateBack = () => {
    dispatch(setActiveIndex(2));
    navigate('/add-ons');
  };

  // Function to handle the finishing up and navigation to the thank you page
  const handleFinishingUp = () => {
    navigate('/thank_you');
  };

  return (
    <div className=''>
      <Header
        mainHeader='Finishing up'
        text='Double-check everything looks OK before confirming.'
      />
      <div className='mt-6 bg-magnolia desktop:m-0 mobile:m-4 desktop:w-[34rem] mobile:w-[20rem] p-5 rounded-md'>
        <div className='desktop:w-[31rem]   mobile:w-[18rem] flex flex-row justify-between'>
          <h2 className='text-marine-blue  font-bold mobile:text-[1rem]  desktop:text-[1.5rem]'>
            {buttonValue === 'yearly'
              ? `${planItem.name}(Yearly)`
              : `${planItem.name}(Monthly)`}
          </h2>
          <span className='text-marine-blue  font-bold mobile:text-[1rem] desktop:text-[1.5rem]'>
            {buttonValue === 'yearly' ? planItem.priceYearly : planItem.price}
          </span>
        </div>
        <div>
          <span
            className='text-cool-gray  font-normal  underline cursor-pointer hover:text-purplish-blue'
            onClick={navigateBack}
          >
            change
          </span>
          <hr className='desktop:w-[31rem] mobile:w-[18rem] border-[1px]  border-b-slate-400 mt-4  ' />
        </div>
        {addOnsItems.length === 0 ? (
          <ul></ul>
        ) : (
          <ul className=' list-none mt-4 '>
            {addOnsItems.map((item, index) => (
              <li className='flex desktop:w-[31rem] mobile:w-[18rem] justify-between mb-3' key={index}>
                <p className=' font-medium text-cool-gray'>{item.name}</p>
                <p className=' font-medium text-marine-blue'>{buttonValue === 'yearly' ?  item.priceYearly : item.price}</p>
              </li>
            ))}
          </ul>
        )}
        
      
      </div>
      <div className='desktop:w-[32rem] mobile:w-[20rem] flex justify-between mt-4 mx-4 '>
          <p className='text-cool-gray'>
            Total({buttonValue === 'yearly' ? 'per year' : 'per month'})
          </p>
          <p className=' font-bold text-lg text-purplish-blue'>{`$ ${
            total + (buttonValue==='yearly'? Number(planItem.priceYearly.match(/\d+/g)):Number(planItem.price.match(/\d+/g)))
          }/${buttonValue === 'yearly' ? 'yr' : 'mo'}`}</p>
        </div>
      <div className='desktop:w-[34rem] mobile:w-[20rem]  mobile:mx-4 flex justify-between items-center mt-10'>
      <span
        className='text-cool-gray font-bold hover:text-purplish-blue cursor-pointer'
        onClick={navigateBack}
      >
        Go Back
      </span>
      <NextButton onClick={handleFinishingUp} name='Confirm' />
    </div>
    </div>
  );
}
