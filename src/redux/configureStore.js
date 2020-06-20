import {createStore, combineReducers} from 'redux';
import { Leaders } from './leaders';
import { Faculty } from './faculty';
import { Notices } from './notices';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            leaders: Leaders,
            faculty: Faculty,
            notices: Notices
        })
    );

    return store;
}