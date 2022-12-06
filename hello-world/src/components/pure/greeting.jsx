import React, { Component } from 'react'; 
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Soy un H1 en el archivo gretting, te mando un saludo,{ this.props.name } !
                </h1>
                <h2>
                    Soy H2, tu edad es { this.state.age } !
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Add age
                    </button>
                </div>
            </div>
        );
    }

    birthday = () =>{
        this.setState( (prevState) => (
            {
                age:prevState.age + 1
            }
                
            )) 
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
