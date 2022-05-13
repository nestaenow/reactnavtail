import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtlassian } from '@fortawesome/free-brands-svg-icons'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

const Nav = () => {
    const Links = [
        {name:'Home', link:'/'},
        {name:'Service', link:'/'},
        {name:'About', link:'/'},
        {name:'Blog', link:'/'},
        {name:'Contact', link:'/'}
    ]

    const [Open, setOpen] = useState(false);

  return (
    <div className='md:shadow-sm top-0 left-0 w-full'>
        <div className='md:flex bg-[#ffe4e6] text-white items-center justify-between py-4 md:px-5 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-sans'>
                <p className='text-3xl mr-2'>
                <FontAwesomeIcon icon={faAtlassian} />
                </p>
                <h1>Designer</h1>
            </div>
            <div onClick={()=>setOpen(!Open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
                <FontAwesomeIcon icon={Open ? faXmark : faBars} />
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-[#ffe4e6] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in  ${Open ? 'top-16 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
                {
                    Links.map((link) =>
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-6'>
                            <a href={link.link} className='hover:text-rose-500 duration-100'>{link.name}</a>
                        </li>
                    )
                }
                <Button>
                    Get Started
                </Button>
            </ul>
        </div>
    </div>
  )
}

export default Nav