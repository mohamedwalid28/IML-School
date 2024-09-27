import axios from 'axios';
import React, {useEffect , useState} from 'react'
import styles from './/TrendingCourses.module.css'
import { Link } from 'react-router-dom'

export default function TrendingCourses() {

  const [courses, setCourses] = useState( [] )

  async function getCourses() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/courses`)
    setCourses(data.data.courses)
    console.log(data.data.courses)
  
  }


  useEffect( () => {
    getCourses();
  }, [])




  return <>      


      


        <div>
          <p className="border-main-bottom-thin fs-5 fw-bolder">Popular courses</p>
        </div>
      {courses.map((course)=>  <div key={course._id} className="cursor-pointer  ">

       <Link to= {`/courses/${course._id}`} >

          <div className="cursor-pointer mb-4">
            <div className='div-underline'>
              <img className='w-100 border ' src={course.coverImage}  alt="" />
              <div className='border border-1'>
                <h4 className=' mt-4 ms-3 text-underline'>{course.courseTitle} Course</h4>
                <p className='ms-3'>{course.courseDescribtion.split(" ",10).join(" ")} ...</p>
              </div>

            </div>
          </div>

        </Link>


        </div> )}

       <ul className='navbar-nav m-auto mt-lg-3'> 
                  <li className='m-auto d-flex justify-content-center align-items-center mt-2'>
                    <i className='fab mx-2 fa-facebook-f icon'></i>
                    <i className='fab mx-2 fa-instagram icon'></i>
                    <i className='fab mx-2 fa-linkedin icon'></i>
                    <i className='fab mx-2 fa-tiktok icon'></i>
                  </li>
        </ul> 



  </>
}
