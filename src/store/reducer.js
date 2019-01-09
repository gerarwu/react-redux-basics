import * as actions from '../store/actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {    
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

    if(action.type === actions.STORE_RESULT){
        return {
            ...state,
            results : state.results.concat({ id: Date.now(), value: state.counter})
        }
    }

    if(action.type === actions.DELETE_RESULT){
        const newResults = state.results.filter((result)=>{
            return result.id !== action.idDelete
        });
        return {
            ...state,
            results: newResults
        }
    }

    return state;
}

export default reducer;