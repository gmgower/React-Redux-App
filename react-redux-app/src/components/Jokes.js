import React, {useEffect} from 'react';

import {connect} from 'react-redux'

import {getJokes} from '../store/actions';

const Jokes = ({getJokes, isFetching, joke}) => {
    useEffect(() => {
        getJokes();
    }, [getJokes])

    if(isFetching) {
        return <h2>Fetching jokes for ya!</h2>
    }
    
    return (
    <div>
    <h2>Chuck Norris Jokes:</h2>
    <p>{joke}</p>
    <a className="btn" onClick={getJokes}>Get new a joke.</a>
    </div>
    )
}



const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getJokes})(Jokes)