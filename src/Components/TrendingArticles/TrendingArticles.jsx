import axios from 'axios';
import React, {useEffect , useState} from 'react'
import styles from './/TrendingArticles.module.css'
import { Link } from 'react-router-dom'
import article1 from '../../assets/images/six sigma2.jpg'

export default function TrendingArticles() {

  const [articles, setArticles] = useState( [] )

  async function getArticles() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articles`)
    setArticles(data.data.articles)
    console.log(data.data.articles)
  
  }


  useEffect( () => {
    getArticles();
  }, [])




  return <>      


      

      

        <div>
          <p className="border-main-bottom-thin fw-bolder">Popular Articles</p>
        </div>
      {articles.map((article)=>  <div key={article._id} className="cursor-pointer  ">

          <Link to= {`/articles/${article._id}`} >


          <div className='div-underline text-center mt-4'>
            <img className='w-100 mb-2' src={article.coverImage} alt="" />             
            
            <p className="fw-semibold mb-1 text-main  mt-1">{article.articleTitle.split(' ' , 3).join(' ') + " ..."}</p>
            <div className='pt-1'>
                <a className='color-text fs-6'>{article.articleDescribtion.split(' ' , 6).join(' ') + " ..."}</a>
            </div> 
       </div> 

       </Link>

        </div> )}

       <ul className='navbar-nav m-auto mt-lg-3'> 
                  <li className='m-auto d-flex justify-content-center align-items-center mt-2'>
                    <i className='fab mx-1 fa-facebook-f icon'></i>
                    <i className='fab mx-1 fa-instagram icon'></i>
                    <i className='fab mx-1 fa-linkedin icon'></i>
                    <i className='fab mx-1 fa-tiktok icon'></i>
                  </li>
            </ul> 


  </>
}
