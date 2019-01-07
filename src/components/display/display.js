import React, { Component } from 'react';
import './display.css';

class Display extends Component{

    render(){
        return (

            <div>
                <p className='Display-title'> Result </p>
                <div className='Display-result'> 0 </div>
            </div>

        );
    }
}

export default Display;