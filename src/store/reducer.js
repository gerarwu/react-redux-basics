const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {    
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - action.value 
        }
    }

    if(action.type === 'STORE_RESULT'){
        return {
            ...state,
            results : state.results.concat({ id: Date.now(), value: state.counter})
        }
    }

    if(action.type === 'DELETE_RESULT'){
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