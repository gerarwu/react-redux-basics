import React, { Component } from 'react';
import Aux from '../../hoc/aux/aux';
import Display from '../../components/display/display';
import OperatorContainer from '../../components/operators/operators';
import Results from '../../components/results/results';

class Calculator extends Component{

    render(){
         return(
            <Aux>
                <Display />
                <OperatorContainer />
                <Results />
            </Aux>
        );
    }

}

export default Calculator;