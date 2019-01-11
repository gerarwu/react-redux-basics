import * as actionTypes from './actionTypes';

export const increment = (value) =>{
    return{
        type: actionTypes.INCREMENT, 
        value: value
    }
}

export const decrement = (value) => {    
    return{
        type: actionTypes.DECREMENT,
        value: value
    }
}
