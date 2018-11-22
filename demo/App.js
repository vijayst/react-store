import React from 'react';
import './app.css';
import { Store } from 'react-reducer-store';
import rootReducer from './rootReducer';
import Container from './Container';

export default function App() {
    return (
        <Store rootReducer={rootReducer} log={true}>
           <Container />
        </Store>
    );
}