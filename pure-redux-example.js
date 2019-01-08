const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {

    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    if (action.type === 'RESET_COUNTER') {
        return {
            ...state,
            counter: 0
        }
    }

    return state;
}

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(()=> {
    console.log("the store was updated ", store.getState())
});


// Dispatching actions
setInterval(()=>{
    store.dispatch({ type: 'INC_COUNTER' });    
    store.dispatch({ type: 'ADD_COUNTER', value: 100 });
},2000)

setInterval(()=>{
    store.dispatch({ type: 'INC_COUNTER' });    
    store.dispatch({ type: 'ADD_COUNTER', value: 1000 });
},100)

setInterval(()=>{
    store.dispatch({ type: 'RESET_COUNTER' });
},5000);








