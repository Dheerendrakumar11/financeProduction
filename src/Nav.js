import React, { useState } from 'react';
// import CategoryPosts from './CategoryPosts';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const router = useNavigate()

  const home = ()=>{
    router('/')
  }
  return (
    <>
    <div >
    <nav className="bg-white w-full fixed top-0 z-50">
      <div className="flex items-center justify-center h-16 px-4">
        {/* Hamburger Menu for mobile */}
        <div className="md:hidden absolute left-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-600">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar links for desktop (Centered) */}
        <ul className="hidden md:flex space-x-6 text-black font-medium">
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium" onClick={home}>
              HOME
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              BUSINESS
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              FINANCE
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              LIFESTYLE
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              NEWS
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              VIDEO
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              INVESTING
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              BANKING
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <button className="focus:outline-none hover:text-emerald-600 rounded-md px-3 py-2 text-base font-medium">
              TECHNOLOGY
            </button>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          {/* Add more navbar items similarly */}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white text-emerald-600 space-y-4 px-4 py-2">
          <li className="text-emerald-600 hover:underline">HOME</li>
          <li className="text-emerald-600 hover:underline">BUSINESS</li>
          <li className="text-emerald-600 hover:underline">FINANCE</li>
          <li className="text-emerald-600 hover:underline">NEWS</li>
          <li className="text-emerald-600 hover:underline">INVESTING</li>
          <li className="text-emerald-600 hover:underline">BANKING</li>
          <li className="text-emerald-600 hover:underline">TECHNOLOGY</li>
          {/* Add more mobile menu items similarly */}
        </ul>
      )}
    </nav>
    <hr className="mt-16" />
    <div className='mt-10'>
      <h1 className='font-bold text-2xl text-center font-serif text-gray-800 md:text-center '>NEWS</h1>
    </div>
    {/* <CategoryPosts  /> */}
    {/* <Outlet/> */}
    </div>

    </>
  );
}
