import React, { Component } from 'react';
import { connect } from 'react-redux';
import Operator from './operator/operator';
import './operators.css';

class operatorContainer extends Component {

    makeOperationHandler = (type) =>{
        console.log(type);        
    }

    componentDidUpdate(){
        console.log(this.props.ctr);
    }

    render(){                
        return (
            <div className='OperatorContainer'>
                <Operator label='add 1' clicked={ this.props.onIncrementCounter.bind(null, 1) } />
                <Operator label='add 5' clicked={ this.props.onIncrementCounter.bind(null, 5) } />
                <Operator label='add 10' clicked={ this.props.onIncrementCounter.bind(null, 10) } />
                <Operator label='add 20' clicked={ this.props.onIncrementCounter.bind(null, 20) } />
                <Operator label='add 200' clicked={ this.props.onIncrementCounter.bind(null, 200) } />
                <Operator label='add 1000' clicked={ this.props.onIncrementCounter.bind(null, 1000) } />

                <Operator label='res 1000' clicked={ this.props.onDecrementCounter.bind(null, 1000) } />
                <Operator label='res 200' clicked={ this.props.onDecrementCounter.bind(null, 200) } />
                <Operator label='res 20' clicked={ this.props.onDecrementCounter.bind(null, 20) } />
                <Operator label='res 10' clicked={this.props.onDecrementCounter.bind(null, 10)} />
                <Operator label='res 1' clicked={ this.props.onDecrementCounter.bind(null, 1)} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ctr: state.counter
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onIncrementCounter: (value)=> dispatch({type: 'INCREMENT', value: value}),
        onDecrementCounter: (value)=> dispatch({type: 'DECREMENT', value: value}),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(operatorContainer);