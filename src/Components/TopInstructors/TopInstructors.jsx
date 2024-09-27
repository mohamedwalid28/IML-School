import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './/TopInstructors.module.css'


export default function TopInstructors() {


  const [instructors, setInstructors] = useState( [] )

  async function getInstructor() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/instructor`)
    setInstructors(data.data.instructors)
  }

console.log(instructors?.length)
  

  useEffect( () => {
    getInstructor();
  }, [])


  return <>    

      


        <div className="container mt-1">
        <div className="row  pb-5 ">
          {instructors.map((instructor)=>  <div key={instructor._id} className="col-lg-3 col-md-6 mt-5 cursor-pointer  ">
          

          <Link to= {`/instructors/${instructor._id}`} >

        {/* <div className="cursor-pointer ">
          <div className='div-underline'>
            <img className='w-100 border ' src={instructor.avatar}  alt="" />
            <div className='border border-1'>
              <h4 className=' mt-4 ms-3 text-underline'>{instructor.fName} {instructor.lName}</h4>
              <p className='ms-3'>{instructor.instructorDetails}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <p className=' text-danger ms-3 fw-bold'>COMING SOON</p>
              </div>
            </div>
              
          </div>
        </div> */}

                 <div class="center">
                   <div class="team-container rounded">
                     <img src={instructor.avatar}/>
                        <h4>{instructor.fName} {instructor.lName}</h4>
                        <ul>
                          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
                        </ul>
                      </div>
                  </div>

        </Link>

      </div> )}

</div>
</div>

  </>
}




