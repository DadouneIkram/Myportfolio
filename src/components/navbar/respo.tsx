'use client'
import { useState } from "react"
import Link from "next/link";
function respo() {

  const [Open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!Open)
  }
  return (
    <div>
      <div className="flex md:hidden cursor-pointer"
        onClick={toggle}>
        {!Open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>

        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>

        )}
      </div>

      <figure className={`md:hidden absolute rounded-md right-10 origin-top top-16  ${Open ? "visible " : "scale-y-50 opacity-0 hidden"} w-auto bg-white py-4 px-8 transition-all z-30`}>

        <nav className="w-full h-full flex flex-col space-y-2 tracking-wide">
          <Link href={"#skills"} onClick={toggle}>
            <p className="relative group text-black mb-2">
              Skills
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-current"></span>
            </p>
          </Link>

          <Link href={"#projects"} onClick={toggle}>
            <p className="relative group text-black mb-2">
              Projects
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-current"></span>
            </p>
          </Link>

          <Link href={"#experience"} onClick={toggle}>
            <p className="relative group text-black mb-2">
              Experience
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-current"></span>
            </p>
          </Link>

          <Link href={"#contactme"} className="w-[100px]" onClick={toggle}>
            <p className="relative group text-black mb-2">
              Contact me
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-current"></span>
            </p>
          </Link>

          <Link href="/CV.pdf" target="_blank">
            <button className="flex items-center mt-2  py-2 px-6  hover:bg-[#63A9FC] hover:text-white">
              Resume
              <svg
                className="ml-2 "
                width={21}
                height={21}
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_84_304)">
                  <path
                    d="M3.83337 14.6666V16.3333C3.83337 16.7753 4.00897 17.1992 4.32153 17.5118C4.63409 17.8244 5.05801 18 5.50004 18H15.5C15.9421 18 16.366 17.8244 16.6786 17.5118C16.9911 17.1992 17.1667 16.7753 17.1667 16.3333V14.6666"
                    stroke="#63A9FC"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.33337 9.66663L10.5 13.8333L14.6667 9.66663"
                    stroke="#63A9FC"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 3.83337V13.8334"
                    stroke="#63A9FC"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84_304">
                    <rect
                      width={20}
                      height={20}
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

            </button>
          </Link>
        </nav>
      </figure>

    </div>


  )
}

export default respo