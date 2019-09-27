import axios from "axios";

export const FETCHING_JOKE_START = 'FETCHING_JOKE_START'
export const FETCHING_JOKE_SUCCESS = 'FETCHING_JOKE_SUCCESS'
export const FETCHING_JOKE_ERROR = 'FETCHING_JOKE_ERROR'
export const getJokes = () => {
    return dispatch => {
        dispatch({type: FETCHING_JOKE_START})
        axios.get('http://api.icndb.com/jokes/random')
        .then(res => {
            console.log(res.data.value.joke)
            dispatch({type: FETCHING_JOKE_SUCCESS, payload: res.data.value.joke })            
        })
        .catch(err => {
            dispatch({ type: FETCHING_JOKE_ERROR, payload: err.response.message });
          });
        }
}