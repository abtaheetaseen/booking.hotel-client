import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaCcPaypal, FaCcStripe, FaCcVisa, FaFacebook, FaLinkedin, FaSkype, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
<>
    <div className='bg-black border-b-2 border-white'>
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto py-28'>

      <div className='text-white'>
        <h1 className='text-2xl font-bold'>Booking.Hotel</h1>
        <p className='my-5'>
        Established in 1998, CozyStay Hotel is a boutique hotel in the heart of the Swiss Alps, offering contemporary accommodation and unrivaled access to ski and hiking trails, immersing you in an idyllic setting against pristine skies in search of a truly serene experience.
        </p>

        <div className='text-4xl flex items-center justify-start gap-3'>
        <FaCcStripe />
        <FaCcVisa />
        <FaCcPaypal />
        </div>
      </div>

      <div className='text-white'>
      <h1 className='text-2xl font-bold'>Reach Out</h1>
      <p className='mt-5'>
      Email: booking@cozystay.com
      </p>
      <p>
      Tel: +41 22 345 66 77
      </p>
      <p>
      Fax: +41 22 345 77 89
      </p>
      <p>
        Location: Rue de Lausanne, 1202 Genève, Switzerland
      </p>
      </div>

      <div className='text-white'>
      <h1 className='text-2xl font-bold'>Reach Out</h1>
      <div className='text-2xl text-white my-5 flex items-center justify-start gap-3'>
      <FaFacebook />
      <FaInstagramSquare />
      <FaSkype />
      <FaTwitter />
      <FaLinkedin />
      </div>

      <div className='text-white'>
        <p>
            Privacy & Policy
        </p>
        <p>
            Goals
        </p>
        <p>
            Terms & Condition
        </p>
      </div>
      </div>

      <div className='text-white'>
        <p>
            Home
        </p>
        <p>
            About
        </p>
        <p>
            Services
        </p>
        <p>
            Contact
        </p>
        <p>
            Host your home
        </p>
      </div>
      
    </div>
    </div>

    <div className='bg-black flex items-center justify-center p-10 text-white'>
        <p>
        © Copyright All rights reserved for Booking.Hotel
        </p>
    </div>

    </>
  )
}

export default Footer
