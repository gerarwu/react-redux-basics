import React, { Component } from 'react';
import Display from '../../components/display/display';
import OperatorContainer from '../operatorContainer/operatorContainer';

class Calculator extends Component{

    render(){
         return(
            <div>
                <Display />
                <OperatorContainer />
            </div>
        );
    }

}

export default Calculator;