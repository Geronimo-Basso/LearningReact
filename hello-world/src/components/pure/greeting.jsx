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
            </div>
        );
    }
}


Greeting.propTypes = {

};


export default Greeting;
