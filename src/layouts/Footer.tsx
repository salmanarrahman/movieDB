import React from 'react';
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import html from '../assets/html.svg'
import css from '../assets/css-3.svg'
import react from '../assets/react-2.svg'
import tailwind from '../assets/tailwindcss.svg'
import redux from '../assets/redux.svg'
import firebase from '../assets/firebase.svg'





const Footer = () => {
  return (
    <section id='footer'>

      <footer className="justify-center footer p-10 bg-base-600 text-base-content">



        <div className=''>


          <div className="flex justify-center gap-4 w-full ">
            <a href='https://github.com/arrahman12'>
              <img className='w-10' src={github} alt="" />

            </a>
            <a href='https://www.linkedin.com/in/salman-ar-rahman-47915213a/'>
              <img className='w-10' src={linkedin} alt="" />

            </a>
            <a href='https://www.facebook.com/salluapk/'>
              <img className='w-10' src={facebook} alt="" />
            </a>

          </div>


          <div className='justify-center w-full'>
            <p className='text-center text-black'>© 2023  Salman Ar Rahman. Made with ❤️</p>
            {/* <p className='text-center'>SVG Animation Credit: LottieFiles</p> */}
            <p className='text-center  text-black'>techlonogies used</p>
            <div className='flex justify-center w-full '>
              <img className='w-8 m-2' src={react} alt="" />
              <img className='w-8 m-2' src={redux} alt="" />
              <img className='w-8 m-2' src={firebase} alt="" />
              <img className='w-8 m-2' src="https://daisyui.com/images/daisyui-logo/daisyui-logomark.svg" alt="" />

            </div>


          </div>

        </div>

      </footer>

    </section>
  );
};

export default Footer;