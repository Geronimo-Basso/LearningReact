import React,{useState} from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {

    const[age,setage] = useState(29);

    const birthday= () => {
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                Soy un H1 en el archivo gretting, te mando un saludo,{ props.name } !
            </h1>
            <h2>
                Soy H2, tu edad es { age } !
            </h2>
            <div>
                <button onClick={birthday}>
                    Add age
                </button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {

};


export default Greetingf;
