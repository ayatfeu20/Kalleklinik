import React from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa';

function Confirmation() {
  return (
    <div className='confirmation'>
      <h1 className='confirm'>Tack</h1>
      <p>Din tid har bokat</p>      
      <FaRegCalendarCheck className='check' size={120}/>
      
      
      <p>Vi ska kontakta dig snart</p>


    </div>
  )
}

export default Confirmation