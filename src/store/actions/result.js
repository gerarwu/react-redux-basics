import * as actionTypes from './actionTypes';

// Async store
export const storeResult = (counter)=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type: actionTypes.STORE_RESULT,
                counter: counter
            });
        },2000);
    }    
}

export const deleteResult = (id)=>{
    return{
        type: actionTypes.DELETE_RESULT,
        idDelete: id
    }
}