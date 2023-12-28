import React, {useEffect} from 'react'
import './footer.scss'
import video1 from '../../Assets/video1.mp4'
import {FiChevronsRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'




const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted 
        type='video1/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Address'/>
            <button data-aos='fade-up'
            className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>

            </button>
            
            
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel.
              </a>
            </div>
            <div data-aos='fade-up'
            className='footerParagraph'>
             Celebrate a wedding in style or host a slick business 
             event at the NH Marina Portimão Resort. Our Aqua Lounge
             can cater for up to 150 guests and offers spectacular views 
             of the Arade River.

            </div>

            <div data-aos='fade-up'
             className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>
          </div>
          <div className='footerLinks grid'>

            <div data-aos='fade-up'
            data-aos-duration='3000'
            className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Payment
              </li>

            </div>

            <div data-aos='fade-up'
             data-aos-duration='4000'
            className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                HotelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                TripAdvisor
              </li>

            </div>


            <div data-aos='fade-up'
             data-aos-duration='5000'
            className='linkGroup'>
              <span className='groupTitle'>
                LASTMINUTE
              </span>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                London
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                California
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Europe
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                Singapour
              </li>

              <li className='footerList flex'>
                <FiChevronsRight className='icon'/>
                China
              </li>

            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer