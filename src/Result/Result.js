function Result({ score = 0, unAnswered = [] }) {
    return (
        <div className="quiz-result">
            <div>Score:{score}</div>
            <div>Un-Answered Questions:</div>
            {
                unAnswered.map((uA) => {
                    return <span>{uA.questionNo},</span>
                })
            }
        </div>
    );
}

export default Result;
