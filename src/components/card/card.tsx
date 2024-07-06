'use client';
import Image from 'next/image';
import './card.css';

interface CardProps {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  i: number;
}

const Card: React.FC<CardProps> = ({ title, description, src, url, color, i }) => {
  return (
    <div className="cardContainer">
      <div
        className="card"
        style={{ backgroundColor: color }}
      >
        <p className='flex justify-center text-2xl font-semibold'>{title}</p>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <div className='flex items-center my-4 gap-2'>
              <p className='border-white px-5 py-2 border rounded-2xl text-sm'>Next.js</p>
              <p className='border-white px-5 py-2 border rounded-2xl text-sm'>Node.js</p>
              <p className='border-white px-5 py-2 border rounded-2xl text-sm'>MySQL</p>
            </div>
            <span className='justify-end text-sm'>

              <a href={url} target="_blank">See more</a>

              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="white" />
              </svg>


            </span>
          </div>

          <div className="imageContainer  hidden md:flex">
            <div className="inner">
              <Image
                fill
                src={`/images/${src}`}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
