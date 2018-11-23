import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './storeHelpers';
import shallowEqual from './shallowEqual';

let oldState;

export default function useStore(mapContextToState, initialState) {
    const [state, setState] = useState(initialState);
    oldState = state;

    useEffect(() => {
        subscribe(handleContextChange);
        return () => unsubscribe(handleContextChange);
    }, []);

    const handleContextChange = (context) => {
        if (typeof mapContextToState === 'function') {
            const newState = mapContextToState(context);
            if (!shallowEqual(newState, oldState)) {
                setState(newState);
            }
        } else {
            setState(context);
        }
    }

    return state;
}