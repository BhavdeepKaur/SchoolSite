import {createStore, combineReducers} from 'redux';
import { Leaders } from './leaders';
import { Faculty } from './faculty';
import { Notices } from './notices';
import { Facility } from './facility';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            leaders: Leaders,
            faculty: Faculty,
            notices: Notices,
            facility: Facility
        })
    );

    return store;
}