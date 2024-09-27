import React, {useEffect , useState} from 'react'
import styles from './/Articles.module.css'
import PopularArticles from '../PopularArticles/PopularArticles';
import axios from 'axios';

export default function Articles() {

  const [articleTopics, setArticleTopics] = useState( [] )

  async function getArticleTopics() {

    let {data} = await axios.get(`https://iml-backend.onrender.com/api/articleTopics`)
    setArticleTopics(data.data.articletopics)
  }


  useEffect( () => {
    getArticleTopics();
    window.scrollTo({ top: 0, behavior: 'auto' });  
  }, [])


  {articleTopics.map((articleTopic)=> 
    console.log(articleTopic)
  )}

  return <>    

        
<div className='img-bg-articles '>
  <div className="container p-5  bg-img-articles">
    <div className="row justify-content-between mt-5 align-items-center">
      <div className="col-md-6">
        <h1 className='text-white fw-bolder py-5'>Articles</h1>
      </div>
    </div>
  </div>
</div>





     <div className='mt-5 pt-5'>
      <h1 className='text-center'>All Articles</h1>
      <div class="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>


      <ul className="nav nav-pills mt-3 justify-content-center line-ul" id="pills-tab" role="tablist">
            <li className="nav-item me-2 " role="presentation">
                <button className="nav-link line-line text-black fw-semibold active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
            </li>
            {articleTopics.map((articleTopic)=> 
            <li className="nav-item me-2 " role="presentation">
                <button className="nav-link text-black fw-semibold" id="pills-brand-tab" data-bs-toggle="pill" data-bs-target="#pills-brand" type="button" role="tab" aria-controls="pills-brand" aria-selected="false" tabIndex="-1">{articleTopic.topicName}</button>
            </li>
            )}
        </ul>



        <PopularArticles />



    </div>

  </>
}

{/*       
      <div className="container mt-1">
      <div className="row  pb-5 text-center ">
      
        <div className="col-md-3 mt-2 cursor-pointer  ">
          <div className='div-underline'>
           <img src={course1} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Pool testing with dilution effects and heterogeneous priors</a>
            </div>
              
          </div>
        </div>
      
        <div className="col-md-3 mt-2 cursor-pointer ">
          <div className='div-underline'>
          <img src={course5} className='w-100 border ' alt="" />

            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Managing surgical waiting lists through dynamic priority scoring</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-2 cursor-pointer ">
          <div className='div-underline'>
          <img src={course6} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>A healthcare staff decision model considering the effects of staff cross‐training</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-2 cursor-pointer ">
          <div className='div-underline'>
          <img src={course4} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Fuzzy DEA-based classifier and its applications in healthcare management</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course3} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Sensitivity Analysis for Healthcare Models Fitted to Data by Statistical Methods</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course4} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Modelling Efficiency, Screening and Preferences within Healthcare Systems</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course2} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Integrated Healthcare Networks' Performance: A Growth Curve Modeling</a>
            </div>
              
          </div>
        </div>
        <div className="col-md-3 mt-5 cursor-pointer ">
          <div className='div-underline'>
          <img src={course5} className='w-100 border ' alt="" />
            
            <div className='pb-3 pt-3'>
                <a className='color-text fs-5'>Optimal cost adjustment for a selfish routing healthcare network optimal cost</a>

            </div>
              
          </div>
        </div>


       

      </div>
    </div> */}