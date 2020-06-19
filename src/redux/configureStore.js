import {createStore, combineReducers} from 'redux';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            leaders: Leaders
        })
    );

    return store;
}