import React, { useState } from 'react';
import info from '../info.js';



const QuizComponent = ({ prop }) => {
  const [final, setFinal] = useState(true);
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [qa, setqa] = useState(0);
  const [ca, setca] = useState(0);


  if (final) {
    function next_question() {
      if (question == 15) {
        quit()
      }
      else {
        setQuestion((q) => q + 1);
      }

    }

    function prev_question() {
      if (question == 1) {
        alert("there is no 0th question")
      }
      else {
        setQuestion((q) => q - 1);
      }

    }

    function quit() {
      setFinal(false)
    }

    function calc_next(id) {
      console.log(id, info[question - 1].answer - 1, score);
      if (id === info[question - 1].answer - 1) {
        setScore(score+1)
        setca(ca+1)

      }
      setqa(qa+1)
      next_question();
    }

    return (
      <div className='page_2'>
        <div className='card'>
          <h1>Question - {question}</h1>
          <br />
          <div style={{ textAlign: "center" }}>{question}-15</div>
          <br />
          <h3>{info[question - 1].question}</h3>
          <br />
          <br />
          <div className='options'>
            {info[question - 1].options.map((option, index) => (
              <button key={index} onClick={() => calc_next(index)}>
                {option}
              </button>
            ))}
          </div>
          <div className='under_dog'>
            <button onClick={prev_question}>Previous</button>
            <button onClick={next_question}>Next</button>
            <button onClick={quit}>Quit</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='page_3'>
        <h1 style={{ color: 'red' }}>Result</h1>
        <div className='card'>
          <br />
          <h3>{`You need ${ca == 15 ? `absolutely no` : `more`} practice`}</h3>
          <br />

          <h2 style={{ color: 'blue' }}>Your score is {Math.floor((score / 15) * 100)}%</h2>
          <div className='under_dog3'>
            <div>Total no of questions -- 15</div>
            <div>No of attempted questions -- {qa}</div>
            <div>No of correct answers -- {ca}</div>
            <div>No of incorrect answers -- {qa - ca}</div>
          </div>
        </div>
        <div className='under_dog2'>
          <button onClick={() => {
            setScore(0)
            setqa(0)
            setca(0)
            setQuestion(1)
            setFinal(true)
          }
          }>Play again</button>
          <button onClick={() =>{
            // score = 0;
            setScore(0)
            // qa = 0;
            setqa(0)
            // ca = 0;
            setca(0)
            prop(true);
          }}>Back to home</button>
      </div>
      </div >
    );
  }
};

export default QuizComponent;
