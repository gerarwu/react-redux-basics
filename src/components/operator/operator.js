import React, { Component } from 'react';
import './operator.css';

class Operartor extends Component{

    render(){
        return(
            <div className='Operator'>{this.props.label}</div>
        );
    }

}

export default Operartor;