import { useFormik } from 'formik';
import React, { useEffect , useState } from 'react';
import styles from './/Register.module.css';
import signup from '../../assets/images/login3.png';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default function Register() {

  useEffect( () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])

  let navigate = useNavigate();
  const [isloading , setisloading] = useState(false);
  const [messageError , setmessageError] = useState('');

  async function handleRegister(values){
    setisloading(true)
    let {data} = await axios.post(`https://iml-backend.onrender.com/api/users/register` , values).catch((error) => {
      setisloading(false)
      setmessageError(`${error.response.data.status} : ${error.response.data.message}`)
    })
    

    if (data.status === "success")
    {
      setisloading(false)
      navigate('/login')
    }
    // console.log(data)
  }
  
  let validationSchema = Yup.object({
    fName: Yup.string().required("First Name is required").min(2, "min length is 2").max(10 , "max length is 10"),
    lName: Yup.string().required("Last Name is required").min(2, "min length is 2").max(10 , "max length is 10"),
    email: Yup.string().required("E-mail is required").email('email is invalid'),
    password: Yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/ , "Password must be between 8 and 20 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, #, or &)."),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/ , 'phone must be a valid number'),
    address: Yup.string().required("Address is required").matches(/^[A-Za-z0-9\s-]+$/ , 'address must be valid '),
    gender: Yup.string().required("Gender is required").oneOf(['male', 'female']  , 'gender must be male or female only' ),
  })

  let formik = useFormik({
    initialValues:{
      fName: '',
      lName:'',
      email:'',
      password:'',
      phone:'',
      address:'',
      gender:'',
    },
    validationSchema:validationSchema,
    onSubmit: handleRegister
  })


  return <>          
    <div className="container shadow-lg my-5 rounded">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 p-5">
            <h3 className="border-main-bottom d-inline">Sign Up Now</h3>

            <div className="w-100 text-center">
              <form onSubmit={formik.handleSubmit}>
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fName} type="text" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="First Name" name="fName" id="fName"/>
                {formik.errors.fName && formik.touched.fName ? <div className='alert alert-danger p-0 m-0'>{formik.errors.fName}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lName} type="text" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Last Name" name="lName" id="lName"/>
                {formik.errors.lName && formik.touched.lName ? <div className='alert alert-danger p-0 m-0'>{formik.errors.lName}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="E-mail" name="email" id="email"/>
                {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-0 m-0'>{formik.errors.email}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Password" autoComplete="true" name="password" id="password"/>
                {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-0 m-0'>{formik.errors.password}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type="tel" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Phone" name="phone" id="phone"/>
                {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger p-0 m-0'>{formik.errors.phone}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} type="text" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Address" name="address" id="address"/>
                {formik.errors.address && formik.touched.address ? <div className='alert alert-danger p-0 m-0'>{formik.errors.address}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} type="text" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Gender" name="gender" id="gender"/>
                {formik.errors.gender && formik.touched.gender ? <div className='alert alert-danger p-0 m-0'>{formik.errors.gender}</div> : null}


                <p className='fw-bold'>Already have an account ? <Link to='/login' className='border-2 border-bottom border-black' >Login</Link></p>
                
                
                {messageError.length > 0 ? <div className='alert alert-danger p-1 mt-3 text-center'>
                  {messageError}  
                </div> : null }  

                {isloading? <button type='button' className='btn bg-main text-white w-25 mt-2'> <i className="fas fa-spinner fa-spin"></i> </button> : 
                <button disabled = {!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white w-25 mt-2'>Sign Up</button>
                }

                
                

              </form>
            </div>
        </div>
            
                
        <div className="col-md-6 ">
          <div className='w-100 h-100 '>
            <img src={signup} className='w-100 rounded' />
          </div>
        </div>
      </div>
    </div>


  </>
}
