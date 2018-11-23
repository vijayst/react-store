import { useContext } from 'react';
import DispatchContext from './DispatchContext';

export default function useDispatch() {
    return useContext(DispatchContext);
}