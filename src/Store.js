import React, { useReducer, useEffect } from 'react';
import StoreContext from './StoreContext';
import DispatchContext from './DispatchContext';

let globalDispatch;

function logAndDispatch(action) {
    console.log('Action: ', action);
    return globalDispatch(action);
}


export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue || {}, { type: '__INIT__' });
    const [state, dispatch] = useReducer(props.rootReducer, initialState);
    useEffect(() => {
        if (props.log) {
            console.log('State: ', state);
        }
    }, [state]);

    globalDispatch = dispatch;
    
    return (
        <DispatchContext.Provider value={props.log ? logAndDispatch : dispatch}>
            <StoreContext.Provider value={state}>
                {props.children}
            </StoreContext.Provider>
        </DispatchContext.Provider>
    );
}