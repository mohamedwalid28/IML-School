import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'

import styles from './/ArticleTopics.module.css'

export default function ArticleTopics() {

  const [articleTopics, setArticleTopics] = useState( [] )

  async function getArticleTopics() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articleTopics`)
    setArticleTopics(data.data.articletopics)
  
  }


  useEffect( () => {
    getArticleTopics();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])




  return <>      





      <div className="container mt-2">
      <div className="row  pb-5  ">
      {articleTopics.map((articleTopic)=>  <div key={articleTopic._id} className="col-md-6 mt-5 cursor-pointer  ">
      

          <Link to= {`/articletopics/${articleTopic._id}`} >

          <div className='div-underline rounded'>
            <div className="row  d-flex justify-content-center align-items-center ">
              <div className="col-md-6 cursor-pointer  ">
                <img className='w-100 rounded ' src={articleTopic.topicImage} alt="" />             
              </div> 
            
              <div className="col-md-6 cursor-pointer   ">
                <span className="fw-semibold text-main ">{articleTopic.topicName}</span>
                <div className='pt-1'>
                  <a className='color-text fs-6'>{articleTopic.topicDescribtion.split(' ' , 18).join(' ') + ' ...'}</a>
                </div> 
              </div> 
          </div> 
       </div> 
          
          </Link>
          
        </div> )}

    </div>
    </div>


  </>
}