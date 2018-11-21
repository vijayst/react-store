import React from 'react';
import './app.css';
import { Store } from 'react-reducer-store';
import todoReducer from './todoReducer';
import Container from './Container';

export default function App() {
    return (
        <Store rootReducer={todoReducer}>
           <Container />
        </Store>
    );
}