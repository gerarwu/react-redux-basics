import React, { Component } from 'react';
import { connect }from 'react-redux';
import './results.css';

class Results extends Component{

    componentDidUpdate(){
        console.log(this.props.statesResults);
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
                <button className='Results-save-button' onClick={ this.props.onStoreResult }> Save result </button>
                <ul className='Results-list'>
                    {results}                  
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        statesResults: state.results
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{        
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', idDelete: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);