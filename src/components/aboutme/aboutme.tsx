import React from 'react';
import Image from 'next/image';
import './aboutme.css'; // Import the custom CSS file
import Cube from './cube';
import Link from 'next/link';

function aboutme() {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center h-screen text-white">
      <Cube />
      <div className="flex items-center justify-center mb-6">
        {/* <h1 className="text-5xl font-semibold"></h1> */}
        {/* <Image
          height={60}
          width={60}
          alt="Dummy Image"
          className="hidden md:flex mx-3 border-2 border-white rounded-full aspect-square object-fill"
          src={"/images/me.jpg"}
        /> */}
        <h1 className="w-[70%] text-center text-5xl font-bold leading-tight mt-12">Hello, I'm Front-end developer based in algeria</h1>
      </div>
      {/* <h1 className="text-5xl font-bold"></h1> */}

      <p className="w-[60%] px-4 mt-2 text-xl font-medium flex justify-center text-center leading-tight">
        Building responsive and dynamic websites with a focus on user experience
      </p>
      <div className="flex items-center mx-auto mt-8">
        <Link href={"#contactme"}>
          <button className="btn" type="button">
            <p className='font-semibold text-xl flex items-center'>Let's talk
              <svg
              className='ml-3'
                width={33}
                height={33}
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_84_297)">
                  <path
                    d="M23.1667 9.83325L9.83337 23.1666"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.1666 9.83325H23.1666V21.8333"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84_297">
                    <rect
                      width={32}
                      height={32}
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

            </p>
            <div id="container-stars">
              <div id="stars" />
            </div>
            <div id="glow">
              <div className="circle" />
              <div className="circle" />
            </div>
          </button>

        </Link>


      </div>
      <p className="mt-20 flex justify-center text-center text-sm items-center text-gray-400 ">
        Results speak louder than words, <span className='font-bold  text-lg ml-1 text-white take'> Take a look❤️</span>
      </p>
    </div>
  );
}

export default aboutme;
