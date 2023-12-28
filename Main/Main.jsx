import React, {useEffect} from 'react'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpg'
import image7 from '../../Assets/image7.jpg'
import image8 from '../../Assets/image8.jpg'
import image9 from '../../Assets/image9.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
  id:1,
  imgSrc: image1,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
  },
  {
    id:2,
    imgSrc: image2,
    destTitle: 'Great Rarrier Roof',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
    },
    {
      id:3,
      imgSrc: image3,
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
      },
      {
        id:4,
        imgSrc: image4,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
        },
        {
          id:5,
          imgSrc: image5,
          destTitle: 'Bora Bora',
          location: 'New Zealand',
          grade: 'CULTURAL RELAX',
          fees: '$700',
          description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
          },
          {
            id:6,
            imgSrc: image6,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$700',
            description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
            },
            {
              id:7,
              imgSrc: image7,
              destTitle: 'Bora Bora',
              location: 'New Zealand',
              grade: 'CULTURAL RELAX',
              fees: '$700',
              description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
              },
              {
                id:8,
                imgSrc: image8,
                destTitle: 'Bora Bora',
                location: 'New Zealand',
                grade: 'CULTURAL RELAX',
                fees: '$700',
                description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
                },
                {
                  id:9,
                  imgSrc: image9,
                  destTitle: 'Bora Bora',
                  location: 'New Zealand',
                  grade: 'CULTURAL RELAX',
                  fees: '$700',
                  description:'The opitome of romance, Bora Boranis one of the best travel destination in the world. This place is know for its luxurious stays and adventurous activites.'
                  },
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3  data-aos='fade-right' className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>


  {
    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
      return(
        <div key={id}
        data-aos='fade-up'
        className='singleDestination'>

          <div className='imageDiv'>
            <img src={imgSrc} alt={destTitle}/>
          </div>

          <div className='cardInfo'>
            <h4 className='destTitle'>{destTitle}</h4>
            <span className='container flex'>
              <HiOutlineLocationMarker className='icon'/>
              <span className='name'>{location}</span>
            </span>

            <div className='fees flex'>
              <div className='grade'>
                <span>{grade}<small>+1</small></span>
              </div>
              <div className='price'>
                <h5>{fees}</h5>
              </div>
            </div>
            <div className='desc'>
              <p>{description}</p>
            </div>
            <button className='btn flex'>
              DETAILS <HiOutlineClipboardCheck className='icon'/>
            </button>
          </div>
        </div>
      )
    })
  }
    

      </div>
    </section>
  )
}

export default Main