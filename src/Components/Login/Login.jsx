import { useFormik } from 'formik';
import React, { useEffect , useState } from 'react';
import styles from './/Login.module.css';
import login from '../../assets/images/login4.jpg';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


export default function Login({saveUserData}) {

  useEffect( () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])


  let navigate = useNavigate();
  const [isloading , setisloading] = useState(false);
  const [messageError , setmessageError] = useState('');

  async function handleLogin(values){
    setisloading(true)
    let {data} = await axios.post(`https://iml-backend.onrender.com/api/users/login` , values).catch((error) => {
      setisloading(false)
      setmessageError(`${error.response.data.status} : ${error.response.data.message}`)
    })
    

    if (data.status === "success")
    {
      localStorage.setItem('userToken' , data.data.token)
      saveUserData();
      setisloading(false)
      navigate('/')
    }
    // console.log(data)
  }
  
  let validationSchema = Yup.object({
    
    email: Yup.string().required("E-mail is required").email('email is invalid'),
    password: Yup.string().required("Password is required").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/ , "Password must be between 8 and 20 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, #, or &).")
  })

  let formik = useFormik({
    initialValues:{
      
      email:'',
      password:'',
      
    },
    validationSchema:validationSchema,
    onSubmit: handleLogin
  })


  return <>          
    <div className="container  shadow-lg my-5 rounded">
      <div className="row">
        <div className="col-md-6 p-5">
            <h3 className="border-main-bottom d-inline">Login Now</h3>

            <div className="w-100 text-center">
              <form onSubmit={formik.handleSubmit}>
                
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="E-mail" name="email" id="email"/>
                {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-0 m-0'>{formik.errors.email}</div> : null}
                
                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="w-100 mt-4 my-4 p-2 form form-control rounded-2" placeholder="Password" autoComplete="true" name="password" id="password"/>
                {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-0 m-0'>{formik.errors.password}</div> : null}

                <p className='fw-bold'>Don't have an account ? <Link to='/register' className='border-2 border-bottom border-black' >Sign Up</Link></p>
                
                {messageError.length > 0 ? <div className='alert alert-danger p-1 mt-3 text-center'>
                  {messageError}  
                </div> : null }  

                {isloading? <button type='button' className='btn bg-main text-white w-25 mt-2'> <i className="fas fa-spinner fa-spin"></i> </button> : 
                <button disabled = {!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white w-25 mt-2'>Login</button>
                }

                
                

              </form>
            </div>
        </div>
            
                
        <div className="col-md-6 ">
          <div className='w-100 h-100'>
            <img src={login} className='w-100 h-100 rounded' />
          </div>
        </div>
      </div>
    </div>


  </>
}
