import React, {useEffect} from 'react'
import styles from './/About.module.css'
import about_img from '../../assets/images/photo2.jpg'
import about_img2 from '../../assets/images/learn_business_english.jpg'
import about_img3 from '../../assets/images/wygodne-szkolenia-BHP-odbywajace-sie-online.jpg'
import about_img4 from '../../assets/images/angga-krishna-mentoring-scaled-e1597491793526.jpg'
import dwedar from '../../assets/images/dwedar.jpg'
import mohamed from '../../assets/images/Mohamed Elmasry.jpeg'

export default function About() {

  useEffect( () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])

  return <>    
    
    <div className='img-bg-about '>
  <div className="container p-5  bg-img-about">
    <div className="row justify-content-between mt-5 align-items-center">
      <div className="col-md-6">
        <h1 className='text-white fw-bolder py-5'>About Us</h1>
      </div>
    </div>
  </div>
</div>


  <div className="container text-center">
    <div className="row mt-5">
      <div className="col-md-12">
        <h1 className='fw-bolder mt-4  '><span className='text-main'>IML</span> SCHOOL </h1>
        <p className=' mt-2 fw-bold text-main-light fs-4'>More than just online courses and articles, it is a community. We are an IML community</p>
        <p className='mt-1'>IML School is a forward-thinking platform offering courses and resources on machine learning and AI. We foster a collaborative community, where learners connect, share knowledge, and develop their skills to tackle real-world challenges in technology.</p>
        <p className='mt-1'>Our mission is to build an inclusive, engaging space where students can access expert-led courses, discuss ideas, and support each other in achieving their educational goals.</p>
      </div>
    </div>
  </div>


  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6">
        <img src={about_img2} alt="" className='w-100 mt-4' />
      </div>
      <div className="col-md-6 mt-4">
        <h2 className='border-main-bottom d-inline'>Why Academy Works</h2>
        <p className='mt-4 fw-bolder '>1) Community-Driven Learning Approach</p>
        <p className='mt-4'>IML School fosters a strong, interactive community where students collaborate, exchange knowledge, and support each other. This helps create a dynamic learning environment that promotes growth and development.</p>
        <p className='mt-4 fw-bolder '>2) Expert Instructors and Practical Skills</p>
        <p className='mt-4'>Our courses are taught by industry leaders who provide practical, real-world insights into machine learning and AI. Students gain hands-on experience and learn skills that can be immediately applied in professional settings.</p>
      </div>
    </div>
  </div>


  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 mt-4">
        <h2 className='border-main-bottom d-inline'>IML History</h2>
        <p className='mt-4 fw-bolder '>1) Founded on Innovation</p>
        <p className='mt-4'>IML School Academy was established with a vision to transform traditional learning. From the start, our mission has been to bridge the gap between theoretical knowledge and practical skills, offering students the tools they need to thrive in today’s fast-paced business world.</p>
        <p className='mt-4 fw-bolder '>2) Growing with a Global Reach</p>
        <p className='mt-4'>Over the years, our academy has expanded its reach, connecting learners and experts from across the globe. With a diverse range of courses and a growing community of professionals, we have become a leading platform for business and marketing education.</p>
      </div>
      <div className="col-md-6">
        <img src={about_img3} alt="" className='w-100 mt-4' />
      </div>

    </div>
  </div>


  <div className="container ">
    <div className="row mt-5">
      <div className="col-md-6 ">
        <img src={about_img4} alt="" className='w-100 mt-4' />
      </div>
      <div className="col-md-6  mt-4">
        <h2 className='border-main-bottom d-inline mt-3'>The IML School mission</h2>
        <p className='mt-4 fw-bolder '>1) Empowering Learners Worldwide</p>
        <p className='mt-4'>Our mission is to provide high-quality, accessible education to learners everywhere. We believe that everyone should have the opportunity to develop their business and marketing skills, regardless of their background or location.</p>
        <p className='mt-4 fw-bolder '>2) Fostering a Global Community</p>
        <p className='mt-4'>At IML School Academy, education is more than just learning; it’s about building connections. We aim to create a thriving, global community where students, instructors, and industry leaders come together to share knowledge, collaborate, and inspire one another.</p>
      </div>
    </div>
  </div>



<div className='mt-5 pt-5'>
  <h1 className='text-center'>Our Team</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
        </div>


    <div className="container">
      <div className="row text-center mt-5 ">
        <div className="col-md-3">
          <img src={dwedar} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3 fw-bolder'>Dr Mahmoud Dwedar</h5>
          <p className='bg-main text-white shadow shadow-lg '>CEO & Founder of IML Academy</p>
        </div>
        <div className="col-md-3">
          <img src={mohamed} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3 fw-bolder'>Mohamed Elmasry</h5>
          <p className='bg-main text-white shadow shadow-lg '>Web Developer & Security Specialist</p>

        </div>
      </div>
    </div>




    </div>


  </>
}
