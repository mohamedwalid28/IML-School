import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'

import styles from './/CourseTopics.module.css'

export default function CourseTopics() {

  const [courseTopics, setCourseTopics] = useState( [] )

  async function getCourseTopics() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/courseTopics`)
    setCourseTopics(data.data.coursetopics)
  
  }


  useEffect( () => {
    getCourseTopics();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])




  return <>      





      <div className="container mt-2">
      <div className="row  pb-5  ">
      {courseTopics.map((courseTopic)=>  <div key={courseTopic._id} className="col-md-4 mt-5 cursor-pointer img-hover ">
      

          <Link to= {`/courseTopics/${courseTopic._id}`} >

            <div className='courses-hover '>

              <div className=" img-hover-hidden cursor-pointer  ">
                <img className='w-100 rounded ' src={courseTopic.categoryImage} alt="" />             
              </div> 
            
              <div className=" cursor-pointer  px-3 pt-3 pb-5 ">
                <span className="fw-semibold text-main ">{courseTopic.categoryName}</span>
                <div className='pt-1'>
                  <a className='fs-6'>{courseTopic.categoryDescribtion.split(' ' , 12).join(' ') + ' ...'}</a>
                </div> 
              </div> 
            </div>


          
          </Link>
          
        </div> )}

    </div>
    </div>


  </>
}