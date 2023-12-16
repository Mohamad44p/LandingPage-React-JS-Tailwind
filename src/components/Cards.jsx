import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="single Card" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover-styles p-shadow'>Start Trial</button>   
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="double Card" />
              <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
              <p className='text-center text-4xl font-bold'>$249</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                  <p className='py-2 border-b mx-8'>2 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 6 GB</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="triple Card" />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold'>$349</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>3000 GB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover-styles p-shadow'>Start Trial</button>   
        </div>
      </div>
    </div>
  )
}

export default Cards
