import React from "react"
import { AiOutlineSearch } from 'react-icons/ai';

const Presentation = () => {
    return (
      <div className='w-full h-52 relative'>
        <img
          className='w-full h-full object-cover'
          src={
            "https://images.unsplash.com/photo-1664197003827-97f13c3ac52e?ixid=Mnw0OTIzN3wwfDF8YWxsfDh8fHx8fHwyfHwxNjY0MjI4NTk5&ixlib=rb-1.2.1"
          }
          alt='Presentation'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
          <h1 className='py-4'>Top Thumbnails</h1>
          <form className='flex justify-between item-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bf-gray-100 bg-gray-100/90'>
            <div>
              <input
                type='text'
                placeholder='Search Thumbnails'
                className='bg-transparent w-[300px] font-[Poppins] focus:outline-none'
              />
            </div>
            <div>
              <button>
                <AiOutlineSearch size={20} className='icon' />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Presentation;