import React from 'react'
import "./experience.css"
import Image from 'next/image'
function experience() {
  return (
    <section id='experience' className='mx-20 mt-10'>
      <p className='cherry text-4xl justify-center flex '>Experience</p>

      <div className='my-10  items-center justify-center gap-5 grid lg:grid-cols-4 md:grid-cols-2  '>
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <Image
                  fill
                  src={`/images/esishowcase.jpg`}
                  alt="image"
                />

              </div>
            </div>
            <div className="front">
              <div className="img ">
                <Image
                  fill
                  src={`/images/esishowcase.jpg`}
                  alt="image"
                />
              </div>
              <div className="front-content ">
                <small className="badge">Workshop</small>
                <div className="description">
                    <p className=" font-semibold text-lg">
                    ESI - SHOWCASE
                    </p>
                  <p className="card-footer">February 18 , 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
              <Image
                fill
                src={`/images/2cp.jpg`}
                alt="image"
              />
              
              </div>
            </div>
            <div className="front">
              <div className="img">
              <Image
                fill
                src={`/images/2cp.jpg`}
                alt="image"
              />
              </div>
              <div className="front-content">
                <small className="badge">multidisciplinary project</small>
                <div className="description">
                <p className=" font-semibold text-lg">
                  Clinic app & platforme
                    </p>
                  
                  <p className="card-footer">June 5 , 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
        
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
              <Image
                fill
                src={`/images/1cs.jpg`}
                alt="image"
              />
              
              </div>
            </div>
            <div className="front">
              <div className="img">
              <Image
                fill
                src={`/images/1cs.jpg`}
                alt="image"
              />
              </div>
              <div className="front-content">
                <small className="badge">multidisciplinary project</small>
                <div className="description">
                <p className=" font-semibold text-lg">
                  El hadj platform
                    </p>
                  
                  <p className="card-footer">June 8 , 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
              <Image
                fill
                src={`/images/xcode.png`}
                alt="image"
              />
              
              </div>
            </div>
            <div className="front">
              <div className="img">
              <Image
                fill
                src={`/images/xcode.png`}
                alt="image"
              />
              </div>
              <div className="front-content">
                <small className="badge">Workshop</small>
                <div className="description">
                <p className=" font-semibold text-lg">
                  Xcode
                    </p>
                  
                  <p className="card-footer">March 5 , 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default experience