import axios from 'axios';
import React, {useEffect , useState , useRef } from 'react'
import { Link , useParams , useNavigate} from 'react-router-dom'
import styles from './/CourseDetails.module.css'
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import TrendingCourses from '../TrendingCourses/TrendingCourses';
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from 'media-chrome/dist/react';

export default function CourseDetails() {

  const [courseDetails, setCourseDetails] = useState( [] )
  const [isLoading, setisLoading] = useState(false)
  const userToken = localStorage.getItem('userToken');

  const videoRef = useRef(null);


  const navigate = useNavigate();

  
  async function getCourseTopicsDetails() {
    setisLoading(true)
    let {data} = await axios.get(`https://iml-backend.onrender.com/api/courses/${id}`)
    setCourseDetails(data.data.course)


    setisLoading(false)
  }

  
  useEffect( () => {
    getCourseTopicsDetails();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  
  
  let {id} = useParams()
  


  return <>      

    {!userToken ? navigate('/login') : 
    
    <>

      {isLoading ? <div className='text-center'>
         <i className='fas fa-spinner fa-spin fa-3x text-main p-3 m-3 '></i>
      </div>
      : 
      
      <>
      <div className='img-bg-courses '>
        <div className="container p-5  bg-img-about">
          <div className="row justify-content-between mt-5 align-items-center ">
            <div className="col-md-12">
              <h1 className='text-white fw-bolder py-5'>Category Topic : {courseDetails.categoryCourse}</h1>
            </div>
          </div>
        </div>
      </div>

      
    <div className="container">
      <div className="row p-3 mt-3">


        <div className="col-md-8">

            

          <div className='mt-3 border border-1 rounded p-3'>
              <div className='mt-3'>
                <p className='mb-0 fw-bolder fs-5'>- {courseDetails.courseTitle} Describtion</p>
                <p className='font-md'>{courseDetails.courseDescribtion}</p>
              </div>
          </div>   



            
          <div className='mt-3 border border-1 rounded p-3'>
            <p className='mb-2 fw-bolder fs-5 mb-4'>{courseDetails.courseTitle} course introduction :</p>
            <MediaController>
                <video
                  ref={videoRef}
                  slot="media"
                  src={courseDetails.videoIntro}
                  preload="auto"
                  muted
                  crossOrigin=""
                />
                <MediaControlBar>
                  <MediaPlayButton></MediaPlayButton>
                  <MediaSeekBackwardButton></MediaSeekBackwardButton>
                  <MediaSeekForwardButton></MediaSeekForwardButton>
                  <MediaTimeRange></MediaTimeRange>
                  <MediaTimeDisplay showDuration></MediaTimeDisplay>
                  <MediaMuteButton></MediaMuteButton>
                  <MediaVolumeRange></MediaVolumeRange>
                  <MediaFullscreenButton></MediaFullscreenButton>
                </MediaControlBar>
            </MediaController>


          </div>





            <div className='mt-3 border border-1 rounded p-3'>

                <p className='fw-bolder fs-1 mb-0 '>Course Content</p>

                <div className="row">

                  <div className="col-md-12">
                        <div className="accordion" id="accordionVideos">
                              {courseDetails?.urlVideos?.map((videoUrl, index) => (
                                <div className="accordion-item" key={index}>
                                  <h2 className="accordion-header">
                                    <button
                                      className={`accordion-button ${index === 0 ? 'collapsed' : ''}`}
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target={`#collapseVideo-${index}`}
                                      aria-expanded={index === 0 ? 'true' : 'false'}
                                      aria-controls={`collapseVideo-${index}`}
                                    >
                                      Lecture {index + 1}
                                    </button>
                                  </h2>
                                  <div
                                    id={`collapseVideo-${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                    aria-labelledby={`heading-${index}`}
                                    data-bs-parent="#accordionVideos"
                                  >
                                    <div className="accordion-body">
                                    <MediaController>
                                        <video
                                          ref={videoRef}
                                          slot="media"
                                          src={videoUrl}
                                          preload="auto"
                                          muted
                                          crossOrigin=""
                                          
                                        />
                                        <MediaControlBar>
                                          <MediaPlayButton></MediaPlayButton>
                                          <MediaSeekBackwardButton></MediaSeekBackwardButton>
                                          <MediaSeekForwardButton></MediaSeekForwardButton>
                                          <MediaTimeRange></MediaTimeRange>
                                          <MediaTimeDisplay showDuration></MediaTimeDisplay>
                                          <MediaMuteButton></MediaMuteButton>
                                          <MediaVolumeRange></MediaVolumeRange>
                                          <MediaFullscreenButton></MediaFullscreenButton>
                                        </MediaControlBar>
                                    </MediaController>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>



                  </div>

              </div>

            </div>      








 
        </div>


        <div className="col-md-4">
            

              <div className='mt-3 border border-1 rounded p-3 '>

                <table className='table mt-3' >
                  <tbody>
                    <tr className=' rounded'>
                        <th scope="col">Course title</th>
                        <td className='text-end'>{courseDetails.courseTitle}</td>
                    </tr>
                    <tr className=''>
                        <th scope="col">Instructor</th>
                        <td className='text-end'>{courseDetails.instructor}</td>
                    </tr>
                    <tr className=''>
                        <th scope="col">price</th>
                        <td className='text-end'>{courseDetails.price}</td>
                    </tr>
                              
                  </tbody>
                </table>
                              
              </div>



              <div className='mt-3 border border-1 rounded p-3 '>

                  <table className='table mt-3' >
                    <tbody>

                      <tr className=''>
                          <th scope="col">Duration</th>
                          <td className='text-end'>{courseDetails.duration}</td>
                      </tr>
                      <tr className=''>
                          <th scope="col">Certifications</th>
                          <td className='text-end'>{courseDetails.certificate}</td>
                      </tr>
                      <tr className=''>
                          <th scope="col">Assesments</th>
                          <td className='text-end'>{courseDetails.assessments}</td>
                      </tr>
                      
                    </tbody>
                  </table>

              </div>



              <div className='mt-3 border border-1 rounded p-3 '>

                  <table className='table mt-3' >
                    <tbody>

                      
                      <tr className=''>
                          <th scope="col">Lectures</th>
                          <td className='text-end'>{courseDetails.lectures}</td>
                      </tr>
                      <tr className=''>
                          <th scope="col">Students</th>
                          <td className='text-end'>{courseDetails.students}</td>
                      </tr>

                      
                    </tbody>
                  </table>

              </div>


                
              <div className='mt-3 border border-1 rounded p-3 '>

                <TrendingCourses/>

              </div>
              

        </div>
        
      </div>
    </div>




      <div className=' mt-5 '>
    <h1 className='text-center'>Related courses</h1>
      <div className="lines mb-0">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>

      <div className="container">
        <div className="row">
            
          <div className="col-md-12">

          
          <FeaturedCourses/>
          
          </div>
        
        </div>
      </div>
      </div>

      </>
      }
      
      

    </> 
    
    }

  

  </>
}