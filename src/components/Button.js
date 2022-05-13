import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-rose-500 text-white font-sans py-2 px-6 rounded md:ml-8 hover:bg-rose-400 duration-500 font-semibold '>
        {props.children}
    </button>
  )
}

export default Button