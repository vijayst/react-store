import { useContext } from 'react';
import StoreContext from './StoreContext';

export default function useStore() {
    return useContext(StoreContext);
}