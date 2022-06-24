import Options from '../Options/Options';

function Question({ question = {}, totalQuestion = 10, timer, checkAnswer }) {
    const { questionNo, value, options } = question;
    return (
        <div className='question-container'>
            <div className='question-header'>
                <span>Question {(questionNo)}/{totalQuestion}</span>

                <span>Time Left : 0:{timer}</span>
            </div>
            <div className='question-content'>
                <div className='question'>{value}</div>
                <div className='question-options'>
                    <Options
                        options={options} checkAnswer={checkAnswer} />
                </div>
            </div>
        </div>
    );
}

export default Question;
