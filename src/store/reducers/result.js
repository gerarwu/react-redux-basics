import * as actions from '../actions';

const initialState = {    
    results: []
};

const result = (state = initialState, action) => {        

    if(action.type === actions.STORE_RESULT){
        return {
            ...state,
            results : state.results.concat({ id: Date.now(), value: action.counter}) // cambiar la referencia
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

export default result;