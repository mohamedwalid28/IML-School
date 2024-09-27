import axios from 'axios';
import React, {useEffect , useState} from 'react'
import styles from './/PopularArticles.module.css'
import { Link } from 'react-router-dom'


export default function PopularArticles() {

  const [articles, setArticles] = useState( [] )

  async function getArticles() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articles`)
    setArticles(data.data.articles)
  }


  

  useEffect( () => {
    getArticles();
  }, [])




  return <>      


      

      
      <div className="container mt-1">
      <div className="row  pb-5 text-center ">
      {articles.map((article)=>  <div key={article._id} className="col-md-3 mt-5 cursor-pointer  ">
          

          <Link to= {`/articles/${article._id}`} >
          
            

          <div className='div-underline'>
            <img className='w-100 mb-2' src={article.coverImage} alt="" />             
            
            <span className="fw-semibold text-main mb-1">{article.categoryTopic}</span>
            <p className="fw-semibold mb-1 mt-1">{article.articleTitle}</p>
            <div className='pt-1'>
                <a className='color-text fs-6'>{article.articleDescribtion.split(' ' , 25).join(' ') + ' ...'}</a>
            </div> 
       </div> 

       </Link>

        </div> )}



      </div>
    </div>


  </>
}
