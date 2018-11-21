import React, { useState } from 'react';
import { useStore } from 'react-reducer-store';

export default function Form(props) {
    const [value, setValue] = useState('');
    const [state, dispatch] = useStore();

    function handleAdd(e) {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            text: value
        });
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form>
            <input 
                type="text" 
                placeholder="Add Todo" 
                value={value} 
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
        </form>
    );
}