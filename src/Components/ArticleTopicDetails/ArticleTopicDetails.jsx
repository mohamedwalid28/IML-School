import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link , useParams } from 'react-router-dom'
import styles from './/ArticleTopicDetails.module.css'

export default function ArticleTopicDetails() {

  const [articleTopicDetails, setArticleTopicDetails] = useState( [] )
  const [matchedArticles, setMatchedArticles] = useState( [] )

  async function getArticleTopicsDetails() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articleTopics/${id}`)
    setArticleTopicDetails(data.data.articleTopicId)
    // console.log(data.data.articleTopicId)
  }

  async function matchedArticlesfun() {
    let matchedData = await axios.get(`https://iml-backend.onrender.com/api/articles`)
    setMatchedArticles(matchedData.data.data.articles)
    // console.log(matchedData.data.data.articles)
}


  useEffect( () => {
    getArticleTopicsDetails();
    matchedArticlesfun();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])



  let {id} = useParams()

  return <>      

      <div className='img-bg-about '>
        <div className="container p-5  bg-img-about">
          <div className="row justify-content-between mt-5 align-items-center">
            <div className="col-md-12">
              <h1 className='text-white fw-bolder py-5'>{articleTopicDetails.topicName}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center p-3 mt-3">
          <div className="col-md-12">
            <p className='fw-bold fs-4'>What is the {articleTopicDetails.topicName}?</p>
            <p className='fw-semi-bold fs-4'>{articleTopicDetails.topicDescribtion}</p>
          </div>
        </div>
      </div>

      {articleTopicDetails.topicName === matchedArticles.map((article)=> article.categoryTopic )?.find(item =>item  == articleTopicDetails.topicName)?
        <>
      <div className=' pt-4 '>
    <h1 className='text-center'>All Articles about {articleTopicDetails.topicName}</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
      </div>
      <div className="container mt-1">
        <div className="row  pb-5 text-center ">

          {matchedArticles.map((article)=>  <div key={article._id}>
      {articleTopicDetails.topicName === article.categoryTopic ?
      
      <div className='col-md-3 mt-5 cursor-pointer'>
        <Link to= {`/articles/${article._id}`} >

          <div className='div-underline'>
            <img className='w-100 mb-2' src={article.coverImage} alt="" />             
            
            <span className="fw-semibold text-main mb-1">{article.categoryTopic}</span>
            <p className="fw-semibold mb-1 mt-1">{article.articleTitle}</p>
            <div className='pt-1'>
                <a className='color-text fs-6'>{article.articleDescribtion}</a>
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
    <h1 className='text-center'>All Articles about {articleTopicDetails.topicName}</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
      </div>
        <div className="container">
          <div className="row text-center">
          <div className="col-md-12">
          <p className='fw-bold fs-4 mt-3'>Not Found Articles About this topic : {articleTopicDetails.topicName}</p>
          </div>
          </div>
          </div>
          </>
  }

  </>
}