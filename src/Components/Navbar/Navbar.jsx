import React from 'react'
import styles from './/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



export default function Navbar({userData , clearUserData}) {


  const navigate = useNavigate();

  function logoutCurrentUser(){
    clearUserData();
    navigate( '/login' );

  }





  return <>    

      <nav className="navbar  navbar-expand-sm navbar-light bg-white shadow-lg rounded">
          <div className="container">
          <Link className="navbar-brand" to="/">
            <h3 className='fw-bold mb-0'><span className='text-main'>IML</span> SCHOOL </h3>
            <h6 className='m-0 fw-medium'>ONLINE EDUCATION & LEARNING</h6>
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">


          <div className='me-auto'>

          
      {/* <ul class="nav nav-pills justify-content-center line-ul" id="pills-tab" role="tablist">
            <li class="nav-item me-2 " >
                <Link class="nav-link line-line active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" to="/">Home</Link>
            </li>
            <li class="nav-item me-2 " >
                <Link class="nav-link" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="false" tabindex="-1" to="about">About</Link>
            </li>
            <li class="nav-item me-2 " >
                <Link class="nav-link" id="pills-articles-tab" data-bs-toggle="pill" data-bs-target="#pills-articles" type="button" role="tab" aria-controls="pills-articles" aria-selected="false" tabindex="-1" to="articles">Articles</Link>
            </li>
            <li class="nav-item me-2 " >
                <Link class="nav-link" id="pills-courses-tab" data-bs-toggle="pill" data-bs-target="#pills-courses" type="button" role="tab" aria-controls="pills-courses" aria-selected="false" graphic="" tabindex="-1" to="courses">Courses</Link>
            </li>
            <li class="nav-item me-2 " >
                <Link class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" graphic="" tabindex="-1" to="contact">Contact</Link>
            </li>
        </ul> */}

            <ul className="navbar-nav ms-auto  mt-lg-0">
              
              <li className="nav-item  mt-4">
                <Link className="nav-link " to="/">Home</Link>
              </li>
              <li className="nav-item mt-4">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item mt-4">
                <Link className="nav-link" to="articles">Articles</Link>
              </li>
              <li className="nav-item mt-4">
                <Link className="nav-link" to="courses">Courses</Link>
              </li>
              <li className="nav-item mt-4">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>

            </ul>   

          </div>


          <div className='ms-auto '>
            <ul className='navbar-nav m-auto mt-lg-0 '>
                  <li className='m-auto d-flex justify-content-center align-items-center mt-2'>
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

            <ul className="navbar-nav d-flex justify-content-center align-items-center m-auto text-center  mt-lg-0">
              
              {userData ? <>
                <li className="nav-item ">
                
                    <span onClick = { logoutCurrentUser } className="nav-link cursor-pointer" >Logout</span>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="profile">Profile</Link>
                </li>
              </> : <>            
                  <li className="nav-item">
                    <Link className="nav-link" to="register">Register</Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="login">Login</Link>
                  </li>
              </>}


            </ul>   
          </div>  

         
          </div>
        </div>
      </nav>
      
  </>
}
