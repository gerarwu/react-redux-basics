import React, { Component } from 'react';
import { connect } from 'react-redux';
import './display.css';

class Display extends Component{

    componentDidUpdate(){
        console.log(this.props.ctr);
    }

    render(){
        return (

            <div>
                <p className='Display-title'> Result </p>
                <div className='Display-result'> { this.props.ctr } </div>
            </div>

        );
    }
}

const mapStateToProps = (state)=>{
    return{
        ctr: state.counter
    }
}

export default connect(mapStateToProps)(Display);