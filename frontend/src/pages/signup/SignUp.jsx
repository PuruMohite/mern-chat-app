import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 shadow-md bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp <span className='text-blue-500'>ChatApp</span>
            </h1>
            
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
                </div>

                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
                </div>

                <GenderCheckBox />

                <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account?</a>

                <div>
                    <button className='btn btn-block btn-sm mt-2 border-none bg-slate-950 hover:bg-black text-gray-300 hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] duration-300 ease-in'>Sign Up</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp


// STARTER CODE FOR SIGNUP COMPONENT
// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 shadow-md bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 SignUp <span className='text-blue-500'>ChatApp</span>
//             </h1>
            
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
//                 </div>

//                 <div>
//                 <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='johndoe' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
//                 </div>

//                 <div>
//                     <label className='label'>
//                         <span className='text-base label-text'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 bg-slate-900 text-gray-300' />
//                 </div>

//                 <GenderCheckBox />

//                 <a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>Already have an account?</a>

//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border-none bg-slate-950 hover:bg-black text-gray-300'>Sign Up</button>
//                 </div>
//             </form>
//         </div>
      
//     </div>
//   )
// }

// export default SignUp

