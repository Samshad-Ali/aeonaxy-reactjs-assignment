import React from 'react'

const Inputfield = ({type,placeholder}) => {
  return (
   <input className='w-full outline-none p-3 border border-gray-400 placeholder:text-gray-600 text-sm rounded-md' type={type} placeholder={placeholder} />
  )
}

export default Inputfield;