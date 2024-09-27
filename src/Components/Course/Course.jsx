import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link , useParams , useNavigate} from 'react-router-dom'
import styles from './/Course.module.css'
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

export default function Course() {

  const [courseDetails, setCourseDetails] = useState( [] )
  const [isLoading, setisLoading] = useState(false)
  const [logged, setLogged] = useState(false);


  const navigate = useNavigate();

  
  async function getCourseTopicsDetails() {
    setisLoading(true)
    let {data} = await axios.get(`https://iml-backend.onrender.com/api/courses/${id}`)
    setCourseDetails(data.data.course)


    setisLoading(false)
  }
  const handleCourseEnroll = () => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      navigate('/login');
      setLogged(false);
    }
    setLogged(true);
    return null;
  };
  
  useEffect( () => {
    getCourseTopicsDetails();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])
  
  
  let {id} = useParams()
  


  return <>      

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


          <p className='fw-bolder fs-1 mb-0 '>Course : {courseDetails.courseTitle}</p>
          <p className='mt-0 mb-1 text-muted fw-bolder'>By : {courseDetails.instructor}</p>
          
          {/* <p className=' mb-0 text-muted fw-bolder'>{courseDetails.publishedAt?.slice(0 , 10)}</p> */}

            <div className='w-100'>
              <img className='w-100 rounded ' src={courseDetails.coverImage} alt="" />              
            </div>
              <div className='mt-3'>
              <p className='mb-0 fw-bolder fs-5'>- {courseDetails.courseTitle} Describtion</p>
              <p className='font-md'>{courseDetails.courseDescribtion}</p>
              </div>
            </div>      

          <div className='mt-3 border border-1 rounded p-3'>


          <p className='fw-semi-bold fs-5 mt-3 '>{courseDetails.articleDescribtion}</p>
            <p className='mt-4 mb-1 fw-bold font-md'>- {courseDetails.detailsData?.section1?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section1?.contentData}</p>
            


            <p className='mt-4 mb-1 fw-bold font-md'>- {courseDetails.detailsData?.section2?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section2?.contentData}</p>
            


            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section3?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section3?.contentData}</p>
           

            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section4?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section4?.contentData}</p>
           

            {courseDetails.detailsData?.section5?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section5?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section5?.contentData}</p>
            
            </>:null}



            {courseDetails.detailsData?.section6?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section6?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section6?.contentData}</p>
            
              </>:null}


            {courseDetails.detailsData?.section7?<>

            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section7?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section7?.contentData}</p>
            
              </>:null}


              {courseDetails.detailsData?.section8?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section8?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section8?.contentData}</p>
            
              </>:null}


              {courseDetails.detailsData?.section9?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section9?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section9?.contentData}</p>
            
              </>:null}


              {courseDetails.detailsData?.section10?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section10?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section10?.contentData}</p>
              </>:null}
                         

              {courseDetails.detailsData?.section11?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section11?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section11?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section12?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section12?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section12?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section13?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section13?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section13?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section14?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section14?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section14?.contentData}</p>
              </>:null}

              
              {courseDetails.detailsData?.section15?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section15?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section15?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section16?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section16?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section16?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section17?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section17?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section17?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section18?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section18?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section18?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section19?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section19?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section19?.contentData}</p>
              </>:null}


              {courseDetails.detailsData?.section20?<>
            <p className='mt-4 mb-1 fw-bold font-md'> {courseDetails.detailsData?.section20?.title}</p>
            <p className='mt-0 mb-4 font-md'>{courseDetails.detailsData?.section20?.contentData}</p>
              </>:null}
            
          </div>

          <div className='mt-3 border border-1 rounded p-3'>
            <p className='mb-2 fw-bolder fs-5 mb-3'>- Introduction about {courseDetails.courseTitle} course</p>
            {/* <video src={courseDetails.videoIntro}  controls /> */}
            <MediaController>
                <video
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

          <div className='text-center m-auto mt-3 border border-1 rounded p-3'>
            <p className='mb-0 text-muted font-sm'>Now <span className='fs-3 fw-bold text-main'>{courseDetails.price}</span> instead of 3000</p>
              {!logged ? 
                <button className='btn bg-main text-white px-5 fs-5' onClick={handleCourseEnroll}>Enroll Now</button>

                :
                <Link to= {`/courses/${courseDetails._id}/details`} >
                <button className='btn bg-main text-white  fs-5 ' onClick={handleCourseEnroll}>Start Now</button>
                </Link>
              }
          </div>

 
        </div>


        <div className="col-md-4">
            
              <div className='mt-3 border border-1 rounded p-3'>
                <p className='mb-0 text-muted font-sm text-center'>Now <span className='fs-3 fw-bold text-main'>{courseDetails.price}</span> instead of 3000</p>

                {!logged ? 

                <button className='btn bg-main text-white fs-5 w-100' onClick={handleCourseEnroll}>Enroll Now</button>
                : 
                <Link to= {`/courses/${courseDetails._id}/details`} >
                <button className='btn bg-main text-white fs-5 w-100' onClick={handleCourseEnroll}>Start Now</button>
                </Link>
                }
              </div >



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