import React from 'react'
import Link from 'next/link'

const AppMainPage = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-fit h-full mx-auto flex'>
        <div className='w-[300px] h-fit my-auto bg-gray-50 rounded-md shadow-md'>
          <div className='w-full h-[100px] flex flex-col p-4'>
            <div className='w-full h-[30%] text-center flex'>
              <div className='w-full h-fit my-auto text-center'>This is the welcome page</div>
            </div>
            <div className='w-full h-[70%] text-center flex my-4'>
              
                <button className='text-white font-bold w-[95%] h-full mx-auto bg-blue-500 rounded-md'>
                  <Link href={'/dashboard'}>
                    Go to account
                  </Link>
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppMainPage