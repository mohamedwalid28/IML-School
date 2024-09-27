import React from 'react'
import styles from './/NotFound.module.css'
import not_found from '../../assets/images/404_error_page_not_found.jpg'


export default function NotFound() {
  return <>    

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 m-auto">
          <img src={not_found} alt="" className='w-100' />
        </div>
      </div>
    </div>


  </>
}
