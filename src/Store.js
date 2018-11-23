import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';
import DispatchContext from './DispatchContext';

export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue || {}, { type: '__INIT__' });
    let [state, dispatch] = useReducer(props.rootReducer, initialState);

    function logAndDispatch(action) {
        console.log('Action: ', action);
        return dispatch(action);
    }

    useEffect(() => {
        if (props.log) {
            console.log('State: ', state);
        }
    }, [state]);

    if (props.log) {
        dispatch = logAndDispatch
    }

    return (
        <DispatchContext.Provider value={dispatch}>
            <StoreContext.Provider value={state}>
                {props.children}
            </StoreContext.Provider>
        </DispatchContext.Provider>
    )
}