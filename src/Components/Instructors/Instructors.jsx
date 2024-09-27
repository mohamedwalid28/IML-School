import React from 'react'
import styles from './/Instructors.module.css'
import TopInstructors from '../TopInstructors/TopInstructors';



export default function Instructors() {
  return <>    
    
    <div className='img-bg-courses '>
  <div className="container p-5  bg-img-courses">
    <div className="row justify-content-between mt-5 align-items-center">
      <div className="col-md-6">
        <h1 className='text-white fw-bolder py-5'>Instructors</h1>
      </div>
    </div>
  </div>
</div>



    <div className='mt-5 pt-5'>
      <h1 className='text-center'>All Instructors</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
        </div>
        </div>

      <div className="container mt-2">
      
      <div className="row  pb-5 ">
      
          <TopInstructors />
        
        </div>
        </div>


  </>
}
