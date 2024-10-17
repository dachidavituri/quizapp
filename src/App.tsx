import { useState } from "react";
import quiz from "./data";
import "./App.css";
import React from "react";
import resultImg from "./assets/Group 15.png";
const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectAnswer, setSelectAnswer] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);
  const [correct, setCorrect] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const handleNextQuestion = () => {
    if (selectAnswer !== 0) {
      const quesion = quiz.questions[currentQuestion];
      const correct = quesion.variants.find((variant) => variant.isCorrect);
      if (selectAnswer == correct?.id) {
        setCorrect((prevCorr) => prevCorr + 1);
        setScore((prevScore) => prevScore + quesion.score);
      }
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectAnswer(0);
    } else {
      setResult(true);
      console.log(correct + 1);
    }
  };

  const handleAnswer = (id: number) => {
    setSelectAnswer(id);
    console.log(selectAnswer);
  };

  const question = quiz.questions[currentQuestion];
  return (
    <div className="App">
      {!result && (
        <div className="quiz-container">
          <div className="heading">
            <div>QuizTime</div>
            <h2>Quiz #2</h2>
          </div>
          <div className="progress">
            <progress
              value={currentQuestion + 1}
              max={quiz.questions.length}
            ></progress>
            <p>
              {currentQuestion + 1}/{quiz.questions.length}
            </p>
          </div>

          <div className="question-section">
            <div className="question">{question.name}</div>

            <div className="answers-section">
              {question.variants.map((variant) => (
                <div
                  className={`answers ${
                    selectAnswer === variant.id ? "selected" : ""
                  }`}
                  key={variant.id}
                  onClick={() => handleAnswer(variant.id)}
                >
                  <div className="circle">{variant.letter}</div>
                  {variant.name}
                </div>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={selectAnswer == 0}
              className={selectAnswer === 0 ? "disabled" : ""}
            >
              {currentQuestion == quiz.questions.length - 1
                ? "finish"
                : "continue"}
            </button>
          </div>
        </div>
      )}

      <div className="result">
        {result && (
          <div>
            <img src={resultImg} />
            <p>Score Gained: {score}</p>
            <p>
              Correct answer: {correct}/{quiz.questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
