import React from 'react'

const loginTailwind = () => {
  return (
    <div className='min-h-screen py-6 justify-center bg-gray-100 antialiased flex flex-col sm:py-12'>
       <div className='relative py-3 sm:w-96 mx-auto text-center'>
        <h1 className='text-3xl font-light'>Login to your account</h1>
            <div className='mt-5 bg-white shadow-md rounded-lg text-left'>
                <div className='h-2 bg-indigo-400 rounded-t-md'></div>
                <div className='px-8 py-6'>
                    <label className='block font-semibold mt-2'>Username or Emial</label>
                    <input type="text" placeholder="Username or Email" className="border w-full h-5 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                    <label className='block font-semibold mt-2'>Password</label>
                    <input type="text" placeholder="Password" className="border w-full h-5 px-3 py-4 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-400 rounded-md"/>
                    <div className='flex justify-between items-baseline'>
                        <button type='submit' className='mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-700'>Login</button>
                        <a href='#' className='text-sm hover:underline'>Forgot Password?</a>
                    </div>
                   <div className='mt-3 text-center font-medium'>
                        <a href='#' className='text-sm hover:underline mt-5'>Don't have account?</a>
                   </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default loginTailwind