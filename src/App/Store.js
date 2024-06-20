import {configureStore} from '@reduxjs/toolkit';
import  hamburgerReducer from '../features/hamburger/hamburger';
export const store = configureStore({
    reducer: {
        hamburger:hamburgerReducer,
        
    },
})
