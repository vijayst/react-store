import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';
import DispatchContext from './DispatchContext';

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
        <DispatchContext.Provider value={dispatch}>
            <StoreContext.Provider value={state}>
                {props.children}
            </StoreContext.Provider>
        </DispatchContext.Provider>
    )
}