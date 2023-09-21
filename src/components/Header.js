import React from 'react'

export default function Header(props) {
  return (
    <div className='desktop:w-auto mobile:w-[290px] mobile:p-2'>
      <h1 className='text-marine-blue font-bold text-[2rem]'>{props.mainHeader}</h1>
      <p className='text-[1rem] text-cool-gray mt-1'>{props.text}</p>
    </div>
  )
}
