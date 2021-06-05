import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - (typeof action.decrementBy === 'number' ? action.decrementBy : 1)
            };

        case 'RESET':
            return {
                count: 0
            };
        
        case 'SET':
            return {
                count: action.count
            };

        default: 
            return state;
    };
};

const store = createStore(countReducer);


// store.subscribe watches for changes to state and runs functions everytime the state changes. 
// it also returns a function that allows you to stop watching for state changes. This is assigned 
// to the 'unsubscribe' variable by convention (but can be called anything)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ count: 22 }));

store.dispatch(resetCount());