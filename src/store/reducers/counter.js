import * as actions from '../actions/actionTypes';

const initialState = {
    counter: 0    
};

const counter = (state = initialState, action) => {    
    if(action.type === actions.INCREMENT ){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    if(action.type ===  actions.DECREMENT ){
        return {
            ...state,
            counter: state.counter - action.value 
        }
    }

    return state;
}

export default counter;