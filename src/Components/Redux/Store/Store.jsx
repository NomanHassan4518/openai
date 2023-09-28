

import { createStore } from 'redux';

const initialState = {
    beforeScroll: "bg-transparent",
    afterScroll: "bg-black",
    textBeforeScroll: "text-white",
    textAfterScroll: "text-white"
};

// Define your reducer function
const cardItem = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'nav':
            return {...state , textAfterScroll: action.payload.textAfterScroll , textBeforeScroll:action.payload.textBeforeScroll , afterScroll:action.payload.afterScroll , beforeScroll:action.payload.beforeScroll }

            default:
                return state
    }
}

const store = createStore(cardItem);

export { store };