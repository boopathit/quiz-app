import Option from './Option';
import './options.css'

function Options({ options, checkAnswer }) {
    return (
        <>
            {
                options &&
                Object.keys(options) &&
                Object.keys(options).length > 0 &&
                Object.keys(options).map((optionKey) => (
                    <Option key={optionKey} {...options[optionKey]} checkAnswer={checkAnswer} />
                ))
            }
        </>
    );
}

export default Options;
