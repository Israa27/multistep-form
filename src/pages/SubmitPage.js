import React from 'react';
import img from '../assets/images/icon-thank-you.svg'

export default function SubmitPage() {
;

  return (
    <div className='desktop:w-[34rem] mobile:w-[21rem] mobile:m-1 desktop:m-0 mobile:h-[20rem] desktop:h-[36rem] flex items-center justify-center flex-col'>
    <img src={img} alt=''/>
    <h1 className='text-marine-blue font-bold  desktop:text-[2rem]  mt-2'>Thank you!</h1>
      <p className='text-cool-gray text-center  mt-2'>Thanks for confirming your subscription! We hope you have fun using 
      our platform. If you ever need support, please feel free to email us at 
      support@loremgaming.com.</p>
    </div>
  )
}
