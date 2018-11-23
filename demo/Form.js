import React, { useState } from 'react';
import { useDispatch } from 'react-reducer-store';

export default function Form(props) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    function handleAdd(e) {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            text: value
        });
    }

    function handleRandom(e) {
        e.preventDefault();
        dispatch({
            type: 'DO_RANDOM'
        });
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    console.log('Form component is rendering');

    return (
        <form>
            <input 
                type="text" 
                placeholder="Add Todo" 
                value={value} 
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRandom}>Random</button>
        </form>
    );
}