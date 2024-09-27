import React, {useEffect} from 'react'
import styles from './/Contact.module.css'

export default function Contact() {


  useEffect( () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])


  return <>    

  <div className='img-bg-contact '>
  <div className="container p-5  bg-img-contact">
    <div className="row justify-content-between mt-5 align-items-center">
      <div className="col-md-6">
        <h1 className='text-white fw-bolder py-5'>Contact Us</h1>
      </div>
    </div>
  </div>
</div>


    <div className="container px-5 pt-5 pb-4 bg-light shadow-lg my-5">
      <div className="row ">
        <div className="col-md-6">
            <h3 className="border-main-bottom d-inline">Send Message US</h3>
            <div className="w-100">
            <input type="text" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Your Name" name="name"/>
            <input type="email" className="w-100 my-4 p-2 form form-control rounded-2" placeholder="Your Email" name="email"/>
            <input type="text" className="w-100 my-4 p-2 form form-control rounded-2" placeholder="Subject" name="sub"/>
        </div>
            <textarea name="message" placeholder="Message" id="message" className="w-100 my-3 p-2 form form-control rounded-2" rows="6"></textarea>
            <button className="btn btn-success px-4 py-2 rounded-5 mt-1">Send Message</button>
                </div>
                <div className="col-md-6 ">
                    <h3 className="border-main-bottom d-inline ">Get in Touch</h3>
                    <p className="lead mt-3 py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                    </p>
                    <ul className='navbar-nav mt-4 ms-3 mt-lg-0 '>
                  <li className=' d-flex mt-2'>
                    <i className='fab mx-2 fa-facebook-f icon'></i>
                    <i className='fab mx-2 fa-instagram icon'></i>
                    <i className='fab mx-2 fa-linkedin icon'></i>
                    <i className='fab mx-2 fa-tiktok icon'></i>
                  </li>
            </ul>
                </div>
            </div>
        </div>



  </>
}
