import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const QuizArticle = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [scores, setScores] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [logged, setLogged] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams(); // Access the article ID from URL params



  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const articleResponse = await axios.get('https://iml-backend.onrender.com/api/articles/');
        const articleById = await axios.get(`https://iml-backend.onrender.com/api/articles/${id}`);
        const quizResponse = await axios.get('https://iml-backend.onrender.com/api/quiz/');

        const articles = articleResponse.data.data.articles;
        const quizzes = quizResponse.data.data.quiz;
        const article = articleById.data.data.article;


        const matchedArticle = articles.find(article => {
          return quizzes.some(quiz => quiz.title.toLowerCase() === article.categoryTopic.toLowerCase());
        });


        if (matchedArticle) {
          const matchingQuiz = quizzes.find(quiz => quiz.title.toLowerCase() === article.categoryTopic.toLowerCase());
          const randomizedQuiz = shuffle(matchingQuiz.questions);

          setQuizData([{ ...matchingQuiz, questions: randomizedQuiz }]);
        } else {
          setQuizData([]); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchQuizData();
  }, []);


  const handleQuizClick = () => {
    const userToken = localStorage.getItem('userToken');
    if (!userToken) {
      navigate('/login');
      setLogged(false);
    }
    setLogged(true);
    return null;
  };

 
  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionChange = (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (selectedOptions[currentQuestion] === '') return;

    const currentQuiz = quizData[0];
    const currentAnswer = currentQuiz.questions[currentQuestion].answers.find(
      (answer) => answer.isCorrect === true
    );

    if (selectedOptions[currentQuestion] === currentAnswer.text) {
      const newScores = [...scores];
      newScores[currentQuestion] = 1;
      setScores(newScores);
    }

    if (currentQuestion < quizData[0]?.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (selectedOptions[currentQuestion] === '') return;

    const currentQuiz = quizData[0];
    const currentAnswer = currentQuiz.questions[currentQuestion].answers.find(
      (answer) => answer.isCorrect === true
    );

    if (selectedOptions[currentQuestion] === currentAnswer.text) {
      const newScores = [...scores];
      newScores[currentQuestion] = 1;
      setScores(newScores);
    }

    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions(Array.from({ length: quizData[0]?.questions.length }, () => ''));
    setScores(Array.from({ length: quizData[0]?.questions.length }, () => 0));
    setShowResults(false);
  };

  const handleAttemptQuiz = () => {
    setAttempted(true);
  };

  const displayResults = () => {
    const currentQuiz = quizData[0];
    return currentQuiz.questions.map((question, index) => {
      const isCorrect = selectedOptions[index] === question.answers.find((answer) => answer.isCorrect)?.text;
      const correctAnswer = question.answers.find((answer) => answer.isCorrect)?.text;

      return (
        <div key={index} className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p>{`Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`}</p>
          {!isCorrect && <p>{`Correct Answer: ${correctAnswer}`}</p>}
        </div>
      );
    });
  };

  const totalScore = scores.reduce((total, score) => total + score, 0);


 return <>
 
        <div className="container">
          {!logged && (

          <div className="card p-4 text-center">
            <h2 className='fw-semibold'>Quiz your self about : {quizData[0]?.title}</h2>
            <p>Click the button below to login</p>
            <button className="btn bg-second text-white w-25 m-auto" onClick={handleQuizClick}>
              Login to attempt Quiz Now
            </button>
          </div>
        )}

        {logged && !attempted && (
          <div className="card p-4 text-center">
            <h2 className='fw-semibold'>Quiz your self about : {quizData[0]?.title}</h2>
            <p>Click the button below to attempt the quiz.</p>
            <button className="btn bg-second text-white w-25 m-auto" onClick={handleAttemptQuiz}>
              Attempt Quiz Now
            </button>
          </div>
        )}
      
        {logged && attempted && !showResults && (
          <div className={`card fw-semibold p-4 ${showResults ? 'fade-out' : 'fade-in'}`}>
            <h2 className='text-center fw-bold'>{quizData[0]?.title}</h2>
            <h3 className='fw-bold'>{quizData[0]?.questions[currentQuestion]?.text}</h3>
            <ul className="list-group">
              {quizData[0]?.questions[currentQuestion]?.answers.map((answer, index) => (
                <li key={index} className="list-group-item">
                  <div className="form-check">
                    <input 
                      type="radio"
                      id={`answer-${index}`}
                      name={`question-${currentQuestion}`}
                      value={answer.text}
                      checked={selectedOptions[currentQuestion] === answer.text}
                      onChange={handleOptionChange}
                      className="form-check-input"
                    />
                    <label htmlFor={`answer-${index}`} className="form-check-label">{answer.text}</label>
                  </div>
                </li>
                
              ))}
            </ul>
            
            <div className="mt-3 text-center">
              <button
                className="btn fw-bold btn-secondary mr-2 me-2"
                disabled={currentQuestion === 0}
                onClick={handlePreviousQuestion}
              >
                <i className="fas fa-arrow-left"></i> Previous
              </button>
              <button
                className="btn fw-bold bg-second text-white mr-2 me-2"
                onClick={handleNextQuestion}
                disabled={currentQuestion === quizData[0]?.questions.length - 1}
              >
                Next <i className="fas fa-arrow-right"></i>
              </button>
              {currentQuestion === quizData[0]?.questions.length - 1 && (
                <button className="btn bg-main fw-bold text-white" onClick={handleFinishQuiz}>
                  Finish
                </button>
              )}
              </div>
              </div>
          )}
          
          {showResults && (
          <div className="card p-4 fw-bold ">
            <h2 className='text-center'>Quiz Completed!</h2>
            <p>Your Score: {totalScore} / {quizData[0]?.questions.length}</p>
            <div className="results">
              {displayResults()}
            </div>
            <button className="btn bg-main fw-bold text-white w-50 m-auto" onClick={handleRestartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
    
      </div>
  


 </>

};

export default QuizArticle;
