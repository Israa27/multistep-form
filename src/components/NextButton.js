import React,{useEffect} from 'react'

export default function NextButton({onClick,name}) {

  return (
    <div className='flex justify-end  mobile:mb-2'>
    <button  className={`w-[7rem] h-[2.5rem] text-white 
    rounded-md bg-marine-blue  font-normal
    hover:bg-purplish-blue`} onClick={onClick}>{!name?'Next Step':name}</button>
    </div>
  )
}
