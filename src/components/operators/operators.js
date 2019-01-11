import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement }  from '../../store/actions/index';
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
                <Operator label='+ 1' clicked={ this.props.onIncrementCounter.bind(null, 1) } />
                <Operator label='+ 5' clicked={ this.props.onIncrementCounter.bind(null, 5) } />
                <Operator label='+ 10' clicked={ this.props.onIncrementCounter.bind(null, 10) } />
                <Operator label='+ 20' clicked={ this.props.onIncrementCounter.bind(null, 20) } />
                <Operator label='+ 200' clicked={ this.props.onIncrementCounter.bind(null, 200) } />
                <Operator label='+ 1000' clicked={ this.props.onIncrementCounter.bind(null, 1000) } />

                <Operator label='- 1000' clicked={ this.props.onDecrementCounter.bind(null, 1000) } />
                <Operator label='- 200' clicked={ this.props.onDecrementCounter.bind(null, 200) } />
                <Operator label='- 20' clicked={ this.props.onDecrementCounter.bind(null, 20) } />
                <Operator label='- 10' clicked={this.props.onDecrementCounter.bind(null, 10)} />
                <Operator label='- 1' clicked={ this.props.onDecrementCounter.bind(null, 1)} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        ctr: state.ctr.counter
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onIncrementCounter: (value)=> dispatch( increment(value)),
        onDecrementCounter: (value)=> dispatch( decrement(value)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(operatorContainer);