import React, { Component } from 'react';
import Aux from '../../hoc/aux/aux';
import Display from '../../components/display/display';
import OperatorContainer from '../../components/operators/operators';

class Calculator extends Component{

    render(){
         return(
            <Aux>
                <Display />
                <OperatorContainer />
            </Aux>
        );
    }

}

export default Calculator;