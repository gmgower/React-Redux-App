
import {FETCHING_JOKE_START, FETCHING_JOKE_SUCCESS} from '../actions'

const initialState = {
    joke: "",
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_JOKE_START:
            return {
                ...state,
                isFetching: true,
                error: '',
                joke: ''
            };
        case FETCHING_JOKE_SUCCESS:
            return {
                ...state,
                joke: action.payload,
                isFetching: false,
                error: ''
            }
    default:
        return state;
    }
}