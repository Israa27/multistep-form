import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import {  selectActiveIndex } from '../redux/menuSlice';
export default function MenuBar() {
  
  const activeIndex = useSelector(selectActiveIndex);
  

  const menuItems = [
    { step: 'stap 1', name: 'your Info', link: '/' },
    { step: 'stap 2', name: 'selcet plan', link: '/select-plan' },
    { step: 'stap 3', name: 'add-ons', link: '/add-ons' },
    { step: 'stap 4', name: 'summary', link: '/summary' },
  ];

  

 

  useEffect(() => {
    
  }, [activeIndex]);

  return (
    <div className={`flex desktop:flex-col desktop:bg-background-sidebar 
    bg-cover rounded-lg bg-no-repeat desktop:h-[45rem] desktop:w-[20rem] 
    mobile:bg-background-sidebar-mobile mobile:w-[22rem] mobile:h-[13rem] 
    mobile:flex-row desktop:justify-start mobile:items-stretch mobile:justify-center `}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row mt-4 p-4 cursor-pointer
          mobile:flex-row
          
          `}
          
        >
          <span
            className={`
            transition-all duration-300 ease-in-out
              font-bold w-10 h-10 text-center 
             leading-10 border rounded-full border-indigo-300 ${
              activeIndex === index ? 'text-black bg-light-blue ' : 'text-white'
            } `}
          >
            {index + 1}
          </span>
          <div className='desktop:ml-4  desktop:flex flex-col mobile:hidden'>
            <span className='uppercase text-light-gray'>{item.step}</span>
            <p className='text-base mt-0.3 text-white font-bold uppercase'>{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
