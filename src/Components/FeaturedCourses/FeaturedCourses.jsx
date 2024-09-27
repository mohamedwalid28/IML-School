import axios from 'axios';
import React, {useEffect , useState} from 'react'
import styles from './/FeaturedCourses.module.css'
import { Link } from 'react-router-dom'


export default function FeaturedCourses() {


  const [courses, setCourses] = useState( [] )

  async function getCourses() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/courses`)
    setCourses(data.data.courses)
  }


  

  useEffect( () => {
    getCourses();
  }, [])


  return <>    

      


        <div className="container mt-1">
        <div className="row  pb-5 ">
          {courses.map((course)=>  <div key={course._id} className="col-lg-4 col-md-6 mt-5 cursor-pointer  ">
          

          <Link to= {`/courses/${course._id}`} >

        <div className="cursor-pointer ">
          <div className='div-underline'>
            <img className='w-100 border ' src={course.coverImage}  alt="" />
            <div className='border border-1'>
              <h4 className=' mt-4 ms-3 text-underline'>{course.courseTitle} Course</h4>
              <p className='ms-3'> <span className='text-main-light fw-bold'>{course.instructor} </span>| {course.startDate} </p>
              <p className='ms-3'>{course.courseDescribtion.split(" ",15).join(" ")} ...</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p className=' text-danger ms-3 fw-bold'>COMING SOON</p>
                <p className='me-5 fw-bold text-main fs-5'>{course.price}</p>
              </div>
            </div>
              
          </div>
        </div>

        </Link>

      </div> )}

</div>
</div>

  </>
}




