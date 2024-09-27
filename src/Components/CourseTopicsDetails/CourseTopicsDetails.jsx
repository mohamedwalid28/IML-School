import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link , useParams } from 'react-router-dom'
import styles from './/CourseTopicsDetails.module.css'

export default function CourseTopicsDetails() {

  const [courseTopicsDetails, setCourseTopicsDetails] = useState( [] )
  const [matchedCourses, setMatchedCourses] = useState( [] )

  async function getCourseTopicsDetails() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/coursetopics/${id}`)
    setCourseTopicsDetails(data.data.courseTopicId)
    // console.log(data.data.courseTopicId)
  }

  async function matchedCoursesfun() {
    let matchedData = await axios.get(`https://iml-backend.onrender.com/api/courses`)
    setMatchedCourses(matchedData.data.data.courses)
    // console.log(matchedData.data.data.courses)
}


  useEffect( () => {
    getCourseTopicsDetails();
    matchedCoursesfun();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])



  let {id} = useParams()

  return <>      

      <div className='img-bg-about '>
        <div className="container p-5  bg-img-about">
          <div className="row justify-content-between mt-5 align-items-center">
            <div className="col-md-12">
              <h1 className='text-white fw-bolder py-5'>{courseTopicsDetails.categoryName}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row  p-3 mt-3">
          <div className="col-md-12">
            <p className='fw-bold text-center fs-4'>What is the {courseTopicsDetails.categoryName}?</p>
            <p className='fw-semi-bold mt-1 fs-5'>{courseTopicsDetails.categoryDescribtion}</p>
          </div>
        </div>
      </div>

      {courseTopicsDetails.categoryName === matchedCourses.map((course)=> course.categoryCourse )?.find(item =>item  == courseTopicsDetails.categoryName)?
        <>
      <div className=' pt-4 '>
    <h1 className='text-center'>All Courses about {courseTopicsDetails.categoryName}</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
      </div>
      <div className="container mt-1">
        <div className="row  pb-5">

          {matchedCourses.map((course)=>  <div key={course._id}>
      {courseTopicsDetails.categoryName === course.categoryCourse ?
      
      <div className='col-lg-4 col-md-6 mt-5 cursor-pointer  '>
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
        </div>
        : null }  
       </div> 
       )}
       </div> 
       </div> 
      </>
          : <>
          <div className=' pt-4 '>
    <h1 className='text-center'>All Courses about {courseTopicsDetails.categoryName}</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
      </div>
        <div className="container">
          <div className="row text-center">
          <div className="col-md-12">
          <p className='fw-bold fs-4 mt-3'>Not Found courses About this topic : {courseTopicsDetails.categoryName}</p>
          </div>
          </div>
          </div>
          </>
  }

  </>
}