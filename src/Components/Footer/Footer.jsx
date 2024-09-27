import React from 'react'
import styles from './/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>    
    
  <div className='img-bg'>
  <div className="container p-5 mt-5 bg-img">
    <div className="row justify-content-between align-items-center">
      <div className="col-md-6">
        <h1 className='text-white'>Subscribe to us!</h1>
        <p className='text-white fs-5'>Far away, behind the mountains, Join our mailing list to get the latest news and offers from IML SCHOOL and our partners!</p>
      </div>
      <div className="col-md-6 text-center">
        <input type="email" name="email-footer" placeholder='Enter Your Email' className='form-control w-75 p-3 m-auto' id="email-footer" />
        <button className='btn btn-success w-25 mt-3'>Send</button>
      </div>
    </div>
  </div>
</div>


    <div className="footer-bg p-5 ">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 underline-border">
            <h3 className='text-main mt-3 ms-3'>IML SCHOOL</h3>
            <p className='text-white mt-4 ms-3'>IML School is a leading online learning platform that connects students from around the world with industry experts.</p>
            <ul className='navbar-nav mt-4 ms-3 mt-lg-0 '>
                  <li className=' d-flex mt-2'>
                    
                      <a href="https://www.facebook.com/businessouting" target='_blank' rel="noopener noreferrer">
                        <i className='fab mx-2 fa-facebook-f icon'></i>
                      </a>
                      <a href="https://www.instagram.com/business_outing/" target='_blank' rel="noopener noreferrer">
                        <i className='fab mx-2 fa-instagram icon'></i>
                      </a>
                      <a href="https://www.linkedin.com/company/iml-egypt/" target='_blank' rel="noopener noreferrer">
                        <i className='fab mx-2 fa-linkedin icon'></i>
                      </a>
                      <a href="https://www.tiktok.com/@businessouting" target='_blank' rel="noopener noreferrer">
                        <i className='fab mx-2 fa-tiktok icon'></i>                      
                      </a>
                  </li>
            </ul>
          </div>
          
          <div className="col-md-3 underline-border">
              <h4 className='text-main ms-3 mt-4'>Quick Links</h4>
              <ul className='navbar-nav ms-3 mt-4'>
                <li className=''>
                  <Link to='/' className='fs-5  text-main-hover'>Home</Link>
                </li>
                <li className='mt-1'>
                  <Link to='about' className='fs-5  text-main-hover'>About</Link>
                </li>
                <li className='mt-1'>
                  <Link to='courses' className='fs-5  text-main-hover'>All Courses</Link>
                </li>
                <li className='mt-1'>
                  <Link to='articles' className='fs-5  text-main-hover'>All Articles</Link>
                </li>
                <li className='mt-1'>
                  <Link to='contact' className='fs-5  text-main-hover'>Contact Us</Link>
                </li>
              </ul>
          </div>

          <div className="col-md-3 underline-border">
              <h4 className='text-main mt-4'>Need a Help?</h4>
              <p className='text-white fs-5 mt-4'>Find all the resources to help manage your account on our Customer Portal or contact our dedicated customer advocate team directly: +201120098206</p>
          </div>

          <div className="col-md-3 underline-border">
              <h4 className='text-main ms-2 mt-4'>Have a Questions?</h4>
              <ul className='navbar-nav ms-2 mt-4'>
                <li className=''><i className="fa-solid fa-location-dot fs-5 text-white "></i><span className='text-white ms-3 fs-5'>85 King Faisal Street, Middle East Building, Blue Brand, El-Maryotia, Giza.</span></li>
                <li className=''><i className="fa-solid fa-phone-volume fs-5 text-white mt-4"></i><span className='text-white ms-3 fs-5'>+201120098206</span></li>
                <li className=' text-white'><i className="fa-solid fa-envelope fs-5  mt-4"></i><a href='' className=' ms-3 fs-6 text-white'></a></li>
              </ul>
          </div>


          <hr className='mt-5 text-main '/>
          <div className="col-md-12">
            <h5 className='text-center mt-3 text-main'>© 2023 All Rights Reserved IML SCHOOL</h5>
          </div>

        </div>
      </div>
    </div>




  </>
}
