import React from 'react';
import { useState } from "react";
import "../App.css";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];



const Home = () => {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
     const[width,setWidth]=useState(0)
     const[widt,setWidt]=useState(0)
     const[n,setN]=useState(0)
    function handleAnswer(isCorrect) {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }
  
  return (
    <div>
    <div className='d-flex flex-items-center justify-content-center'>
        <div className='width1 progress mt-5'>
        <div class={` width${width}`}>
         <div class="progress-bar" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100"></div>
        
      </div>
        </div>
      <div className='rounded-full bg-dark text-white wRound mt-5'>{width}</div>
      <div className='width2 progress mt-5'>
        <div class={`widt${widt}`}>
         <div class="progress-bar" role="progressbar" aria-label="Example with label" aria-valuemin="0" aria-valuemax="100"></div>
       </div>
     </div>
    </div>
    <div className='d-flex justify-content-between mb-5'>
    <div>{width/25}/{questions.length}</div>
    <div>{widt}/{questions.length}</div>
    </div>
    <div className="app">
        
      {showScore ? (
        <div className="score-section">
          <span>Você pontuou {width/25}</span> / {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect?setWidth(width+25):setWidt(widt+1))}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Home;