import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';

function wrapDispatch(dispatch) {
    return function(action) {
        console.log('Action: ', action);
        return dispatch(action);
    };
}

export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue || {}, { type: '__INIT__' });
    let [state, dispatch] = useReducer(props.rootReducer, initialState);

    useEffect(() => {
        if (props.log) {
            console.log('State: ', state);
        }
    }, [state]);

    if (props.log) {
        dispatch = wrapDispatch(dispatch);
    }

    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>
    )
}