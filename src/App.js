import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Articles from './Components/Articles/Articles';
import Article from './Components/Article/Article';
import ArticleTopics from './Components/ArticleTopics/ArticleTopics';
import ArticleTopicDetails from './Components/ArticleTopicDetails/ArticleTopicDetails';
import CourseTopics from './Components/CourseTopics/CourseTopics';
import CourseTopicsDetails from './Components/CourseTopicsDetails/CourseTopicsDetails';
import Courses from './Components/Courses/Courses';
import Course from './Components/Course/Course';
import CourseDetails from './Components/CourseDetails/CourseDetails';
import Instructors from './Components/Instructors/Instructors';
import InstructorDetails from './Components/InstructorDetails/InstructorDetails';
import Contact from './Components/Contact/Contact';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function App() {

  const [userData , setUserData] = useState(null);
  
  function saveUserData() {
    let encodedToken =  localStorage.getItem('userToken')
    let decodedToken =  jwtDecode(encodedToken)
    setUserData(decodedToken)
  }


  function clearUserData() {
    localStorage.removeItem('userToken');
    setUserData(null);
  }


  let routers = createBrowserRouter([
    {path:'' , element:<Layout clearUserData={clearUserData} userData={userData} /> , children:[
      {index:true , element:<Home/>},
      {path:"about" , element:<About/>}, 
      {path:"articles" , element:<Articles/>}, 
      {path:"articles/:id" , element:<Article/>}, 
      {path:"articletopics" , element:<ArticleTopics/>}, 
      {path:"articletopics/:id" , element:<ArticleTopicDetails/>}, 
      {path:"coursetopics" , element:<CourseTopics/>}, 
      {path:"coursetopics/:id" , element:<CourseTopicsDetails/>}, 
      {path:"courses" , element: <Courses/> }, 
      {path:"courses/:id" , element: <Course/> }, 
      {path:"courses/:id/details" , element:<CourseDetails/>}, 
      {path:"instructors" , element: <Instructors/> }, 
      {path:"instructors/:id" , element: <InstructorDetails/> }, 
      {path:"contact" , element:<Contact/>}, 
      {path:"profile" , element: <ProtectedRoute> <Profile userData={userData} /> </ProtectedRoute>}, 
      {path:"register" , element:<Register/>}, 
      {path:"login" , element:<Login saveUserData={saveUserData} />}, 
      {path:"*" , element:<NotFound/>} 
    ]}
  ])


  useEffect( function() {

    if( localStorage.getItem('userToken') != null && userData == null){
      saveUserData()
    }

  } , [])


  return <RouterProvider router={routers}> </RouterProvider>
}

export default App;
