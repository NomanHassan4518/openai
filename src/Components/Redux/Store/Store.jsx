

import storage  from 'redux-persist/lib/storage';
import  { persistReducer } from 'redux-persist';
import {  createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';


const initialState = {
    beforeScroll: "bg-transparent",
    afterScroll: "bg-black",
    textBeforeScroll: "white",
    textAfterScroll: "white",
    footerbgColor:"bg-black",
  
};

// Define your reducer function
const cardItem = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'nav':
            return {...state , textAfterScroll: action.payload.textAfterScroll , textBeforeScroll:action.payload.textBeforeScroll , afterScroll:action.payload.afterScroll , beforeScroll:action.payload.beforeScroll ,  footerbgColor:action.payload.footerbgColor }

            default:
                return state
    }
}

const persistConfig={
    key:"root",
    version:1,
    storage
}

const persistedReducer = persistReducer( persistConfig ,cardItem)

const store = createStore(persistedReducer);

const persistor = persistStore(store)

export { store , persistor };
