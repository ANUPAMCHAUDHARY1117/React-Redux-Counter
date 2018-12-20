import {createStore} from 'redux';
import reducers from './reducers';

const initial_state = {
    count : 0
}

export const store = createStore(
    reducers,
    initial_state
)