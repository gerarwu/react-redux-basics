import React from 'react';
import Operator from '../../components/operator/operator';
import './operatorContainer.css';

const operatorContainer = () => {
    return (
        <div className='OperatorContainer'>
            <Operator label='add 1' />
            <Operator label='add 5' />
            <Operator label='add 10' />
            <Operator label='add 20' />
            <Operator label='min 20' />
            <Operator label='min 10' />
            <Operator label='min 1' />
        </div>
    );
}

export default operatorContainer;