import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='flex w-full bg-gray-100 p-5 rounded-full mb-6'>
       <div className='font-bold whitespace-nowrap bg-slate-400 rounded-full p-2'> AISQL</div>
        <div className='w-full flex flex-row justify-end '>  
        <div onClick={() => window.open('https://github.com/xosaad/sql-ai2', '_blank')} className='hover:cursor-pointer flex items-center'>
        <Image
            width={30}
            height={30}
            src='/github-mark.svg'
            alt='Github Logo linking to the project repo'
        />
        </div>
        </div>
    </div>
  )
}

export default Nav