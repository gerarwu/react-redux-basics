import React, { Component } from 'react';
import './operator.css';

class Operartor extends Component{

    render(){
        return(
            <button className='Operator' onClick={this.props.clicked} >{this.props.label}</button>
        );
    }

}

export default Operartor;