import React from 'react';
import Form from './Form';
import List from './List';

export default function Container() {
    return (
        <div className="app">
            <Form />
            <List />
        </div>
    );
}