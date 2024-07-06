import Image from 'next/image'
import React from 'react'

function skills() {
  return (
    <section id='skills'>
      <div  className='flex items-center mb-10 mx-20 mt-20'>
        <Image
          src={"/images/tools.png"}
          height={30}
          width={30}
          alt=''
          className='mr-2'
        />
        <p className='cherry text-4xl'>Tools & <span className='bg-gradient-to-r from-[#9747FF] to-[#7FABFF] bg-clip-text text-transparent'>Skills</span> </p>
      </div>    
        <div className='grid grid-cols-1 gap-10 mt-6  items-center justify-center md:grid-cols-2 '>
        <div className='w-[80%] mx-auto'>
          <div className='mx-4 mb-4 bg-white rounded-3xl py-2 text-black flex items-center justify-around transition-transform duration-300 hover:-rotate-2'>
            <div className='font-semibold'>
              <Image
                src={"/images/html.png"}
                height={40}
                width={40}
                alt=''
              />
              Html
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/css.png"}
                height={40}
                width={40}
                alt=''
              />
              Css
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/js.png"}
                height={40}
                width={40}
                alt=''
              />
              JavaScript
            </div>
          </div>

          <div className='mx-4 my-7 bg-white rounded-3xl py-2 text-black flex items-center justify-around transition-transform duration-300 hover:-rotate-2'>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/next.png"}
                height={40}
                width={40}
                alt=''
              />
              Nextjs
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/react.png"}
                height={40}
                width={40}
                alt=''
              />
              Reactjs
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/ts.png"}
                height={40}
                width={40}
                alt=''
              />
              TypeScript
            </div>
          </div>


          <div className='mx-4 mb-4 bg-white rounded-3xl py-2 text-black flex items-center justify-around transition-transform duration-300 hover:-rotate-2'>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/github.png"}
                height={40}
                width={40}
                alt=''
              />
              Github
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'

                src={"/images/figma.png"}
                height={40}
                width={40}
                alt=''
              />
              Figma
            </div>
            <div className='font-semibold'>
              <Image
                className='mx-auto'
                src={"/images/tail.png"}
                height={40}
                width={40}
                alt=''
              />
              Tailwind
            </div>
          </div>
        </div>

        <div className='w-[80%] mx-auto'>
        
          <p className='cherry text-4xl mb-8'>Why would you hire me for your project ?</p>
          <div className='text-xl '>
            <li>Problem-Solving</li>
            <li className='my-4'>Project Management</li>
            <li>Collaboration</li>
            <li className='mt-4'>Communication</li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills