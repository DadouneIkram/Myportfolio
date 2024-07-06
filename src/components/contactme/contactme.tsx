import React, { useState } from 'react'
import "./contactme.css"
import Link from 'next/link';
function contactme() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id='contactme' className='mx-20 mt-10'>
      <p className='cherry text-4xl justify-center flex '>Contact me</p>
      <p className='text-gray-400 text-lg flex justify-center text-center mt-6'>
        Questions, bug reports , feedback ? - I'm here for it all
      </p>
      <div>
        <div className="grid grid-cols-1 gap-10   items-center justify-center md:grid-cols-2  mt-8 ">

          <div className="form-card2">
            <form className="form py-4">
              <div className='flex flex-col md:flex-row md:space-x-4 mb-1'>
                <div>
                  <label className="block text-white mb-1" htmlFor="firstName">First name</label>
                  <div className="form-field w-full  mb-4 md:mb-0">
                    <input
                      required
                      placeholder="First name"
                      className="input-field p-1"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-1" htmlFor="firstName">Last name</label>
                  <div className="form-field w-full  mb-4 md:mb-0">
                    <input
                      required
                      placeholder="Last name"
                      className="input-field p-1"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="firstName">Email</label>
                <div className="form-field">
                  <input
                    required
                    placeholder="email@example.com"
                    className="input-field p-1"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-1" htmlFor="firstName">Your message</label>
                <div className="form-field">
                  <textarea
                    required
                    placeholder="Message"
                    cols={30}
                    rows={4}
                    className="input-field"
                    defaultValue={""}
                  />
                </div>
              </div>
              <button className="sendMessage-btn mt-3 ">Send Message</button>
            </form>
          </div>

          <div>
            <div className="section-banner mx-auto hidden md:flex">
              <div id="star-1">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-2">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-3">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-4">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-5">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-6">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
              <div id="star-7">
                <div className="curved-corner-star">
                  <div id="curved-corner-bottomright" />
                  <div id="curved-corner-bottomleft" />
                </div>
                <div className="curved-corner-star">
                  <div id="curved-corner-topright" />
                  <div id="curved-corner-topleft" />
                </div>
              </div>
            </div>


          
          </div>
        </div>
      </div>

    </section>
  )
}

export default contactme