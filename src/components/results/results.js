import React, { Component } from 'react';
import { connect }from 'react-redux';
import * as actions from '../../store/actions';
import './results.css';

class Results extends Component{

    componentDidUpdate(){
        console.log(this.props.statesResults);
        console.log(this.props.ctr);
    }

    render(){
        const resultsCopy = [...this.props.statesResults];
        let results = resultsCopy.reverse().map( result => {
            return( 
                <li key={result.id}> 
                    {result.value}   
                    <span onClick={ this.props.onDeleteResult.bind(null, result.id) }> X </span> 
                </li> );
        })

        return(
            <div className='Results'>
                <button className='Results-save-button' onClick={ this.props.onStoreResult.bind(null, this.props.ctr) }> Save result </button>
                <ul className='Results-list'>
                    {results}                  
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        statesResults: state.res.results,
        ctr: state.ctr.counter
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{        
        onStoreResult: (ctr) => dispatch({type: actions.STORE_RESULT, counter: ctr}),
        onDeleteResult: (id) => dispatch({type: actions.DELETE_RESULT, idDelete: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);