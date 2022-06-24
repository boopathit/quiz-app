import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Question from './Question';
import Result from '../Result/Result';
import QuestionsData from '../data/questions.json'
import './Questions.css';

function Questions() {
    const [questionsList, setQuestionsList] = useState(QuestionsData.questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(2);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
        } else {
            if (currentQuestion === (questionsList.length - 1)) {
                setShowResult(true)
            } else {
                setCurrentQuestion(currentQuestion + 1);
                setTimer(2)
            }
        }
    }, [timer])


    const checkAnswer = (selectedOption, selectedValue) => {
        return (event) => {
            let newQuestions = JSON.parse(JSON.stringify(questionsList));
            let selectesQuestion = newQuestions[currentQuestion];

            const newOptions = {
                ...selectesQuestion.options,
                [selectedOption]: {
                    ...selectesQuestion.options[selectedOption],
                    isSelected: true,
                    isCorrect: selectesQuestion.correctAnswer === selectedOption
                }
            }
            selectesQuestion.options = newOptions;
            setQuestionsList(newQuestions)
            setTimeout(() => {
                setCurrentQuestion((currentQuestion + 1))
            }, 2000);
        }


    }
    const getResult = () => {
        let score = 0;
        let unAnswered = [];
        questionsList.forEach(q => {
            if (Object.keys(q.options).some((optionKey) => (q.options[optionKey].isSelected && q.options[optionKey].isCorrect))) {
                score++;
            }
            if (!Object.keys(q.options).some((optionKey) => (q.options[optionKey].isSelected))) {
                unAnswered.push(q);
            }
        });
        return {
            score,
            unAnswered
        }
    }
    return (
        <Container className='app-container'>
            <h1 className='app-title'>Quiz App</h1>
            {showResult && <Result {...getResult()} />}
            {!showResult &&
                <Question
                    question={questionsList[currentQuestion]}
                    totalQuestion={questionsList.length}
                    timer={timer}
                    checkAnswer={checkAnswer}
                />
            }
        </Container>
    );
}

export default Questions;
