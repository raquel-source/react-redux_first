import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const asd = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = Map({
  number: 0
});

export default handleActions(
    {
        [INCREMENT]: (state, action) => {
            return state.update('number',number => number + 1);
        },
        [DECREMENT]: (state, action) => ( state.update('number',number => number - 1))
    },
    initialState
)