import { Button } from 'react-bootstrap';
function Option({ optionKey, optionValue, isSelected, isCorrect, checkAnswer }) {
    return (
        <>
            <Button onClick={checkAnswer(optionKey, optionValue)} className='option-button' id={optionKey} variant={!isSelected ? "primary" : isCorrect ? "success" : "danger"}>{optionValue}</Button>
        </>
    );
}

export default Option;
