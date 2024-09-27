import axios from 'axios';
import React, {useEffect , useState} from 'react'
import { Link , useParams } from 'react-router-dom'
import styles from './/Article.module.css'
import TrendingArticles from '../TrendingArticles/TrendingArticles';
import PopularArticles from '../PopularArticles/PopularArticles';
import QuizArticle from '../QuizArticle/QuizArticle';


export default function Article() {

  const [articleDetails, setArticleDetails] = useState( [] )
  const [isLoading, setisLoading] = useState(false)


  async function getArticleTopicsDetails() {
    setisLoading(true)
    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articles/${id}`)
    setArticleDetails(data.data.article)
    setisLoading(false)
    // console.log(data.data.article)
  }

  useEffect( () => {
    getArticleTopicsDetails();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])



  let {id} = useParams()



  return <>      

      {isLoading ? <div className='text-center'>
         <i className='fas fa-spinner fa-spin fa-3x text-main p-3 m-3 '></i>
      </div>
      : 
      
      <>
      <div className='img-bg-articles '>
        <div className="container p-5  bg-img-about">
          <div className="row justify-content-between mt-5 align-items-center ">
            <div className="col-md-12">
              <h1 className='text-white fw-bolder py-5'>Category Topic : {articleDetails.categoryTopic}</h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container">
        <div className="row p-3 mt-3">


           

            {articleDetails.articleImages?
          <div className="col-md-10">
            <p className='fw-bolder fs-1  '>{articleDetails.articleTitle}</p>
          <p className='mt-1 mb-0 text-muted fw-bolder'>By : {articleDetails.author}</p> 
          <p className=' mb-0 text-muted fw-bolder'>{articleDetails.publishedAt?.slice(0 , 10)}</p> 

            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.coverImage} alt="" />              
            </div>

          <p className='fw-semi-bold fs-5 mt-3 '>{articleDetails.articleDescribtion}</p>
            <p className='mt-4 mb-1 fw-bold font-md'>1) {articleDetails.textContent?.section1?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section1?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[0]} alt="" />              
            </div>


            <p className='mt-4 mb-1 fw-bold font-md'>2) {articleDetails.textContent?.section2?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section2?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[1]} alt="" />              
            </div>


            <p className='mt-4 mb-1 fw-bold font-md'>3) {articleDetails.textContent?.section3?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section3?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[2]} alt="" />              
            </div>


            <p className='mt-4 mb-1 fw-bold font-md'>4) {articleDetails.textContent?.section4?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section4?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[3]?articleDetails.articleImages[3]:articleDetails.articleImages[0]} alt="" />              
            </div>

            {articleDetails.textContent?.section5?<>
            <p className='mt-4 mb-1 fw-bold font-md'>5) {articleDetails.textContent?.section5?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section5?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[4]?articleDetails.articleImages[4]:articleDetails.articleImages[1]} alt="" />              
            </div>
            </>:null}



            {articleDetails.textContent?.section6?<>
            <p className='mt-4 mb-1 fw-bold font-md'>6) {articleDetails.textContent?.section6?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section6?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[5]?articleDetails.articleImages[5]:articleDetails.articleImages[2]} alt="" />              
            </div>
              </>:null}


            {articleDetails.textContent?.section7?<>

            <p className='mt-4 mb-1 fw-bold font-md'>7) {articleDetails.textContent?.section7?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section7?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[6]?articleDetails.articleImages[6]:articleDetails.articleImages[0]} alt="" />              
            </div>
              </>:null}


              {articleDetails.textContent?.section8?<>
            <p className='mt-4 mb-1 fw-bold font-md'>8) {articleDetails.textContent?.section8?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section8?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[7]?articleDetails.articleImages[7]:articleDetails.articleImages[1]} alt="" />              
            </div>
              </>:null}


              {articleDetails.textContent?.section9?<>
            <p className='mt-4 mb-1 fw-bold font-md'>9) {articleDetails.textContent?.section9?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section9?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[8]?articleDetails.articleImages[8]:articleDetails.articleImages[2]} alt="" />              
            </div>
              </>:null}


              {articleDetails.textContent?.section10?<>
            <p className='mt-4 mb-1 fw-bold font-md'>10) {articleDetails.textContent?.section10?.title}</p>
            <p className='mt-0 mb-4 font-md'>{articleDetails.textContent?.section10?.contentText}</p>
            <div className='w-75'>
              <img className='w-100 rounded ' src={articleDetails.articleImages[9]?articleDetails.articleImages[9]:articleDetails.articleImages[0]} alt="" />              
            </div>
              </>:null}
                         
 
           </div>: <div className='text-center'>
         <i className='fas fa-spinner fa-spin fa-3x text-main p-3 m-3 '></i>
      </div>
           } 


          <div className="col-md-2">

            <div className='mt-3 '>

              <TrendingArticles/>

            </div>

          </div>
        
        </div>
      </div>



      <div className="container">
        <div className="row">
            
          <div className="col-md-12">

          {/* {quizData.map((dataQuiz)=>
              console.log(dataQuiz.questions[0].text)
          )} */}
          <QuizArticle/>
          
          </div>
        
        </div>
      </div>


      <div className=' mt-5 '>
    <h1 className='text-center'>Related Articles</h1>
      <div className="lines mb-0">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>

      <div className="container">
        <div className="row">
            
          <div className="col-md-12">

          
          <PopularArticles/>
          
          </div>
        
        </div>
      </div>
      </div>

      </>
      }
      
      

  </>
}