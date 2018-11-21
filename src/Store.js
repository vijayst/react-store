import React, { useReducer } from 'react';
import StoreContext from './StoreContext';

export default function Store(props) {
    const initialState = props.rootReducer(props.initialValue, { type: '__INIT__' });
    const [state, dispatch] = useReducer(props.rootReducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {props.children}
        </StoreContext.Provider>
    )
}