import {INCREMENT, DECREMENT} from '../actions/types';;

const initial_state = {
    count : 0
}

function reducer(state = initial_state, action) {
    switch(action.type) {
      case INCREMENT:
        return {
          count: state.count + 1
        };
      case DECREMENT:
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }

export default reducer;