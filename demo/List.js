import React, { useState, useEffect } from 'react';
import { useStore } from 'react-reducer-store';

export default function List() {
    const [state, dispatch] = useStore();

    function handleDelete(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }

    return (
        <div className="list">
            {state.todo.map(item => (
                <ListItem key={item.id} 
                    onDelete={handleDelete.bind(null, item.id)} 
                    text={item.text} 
                />
            ))}
        </div>
    );
}

function ListItem(props) {
    const [checked, setChecked] = useState(false);
    
    useEffect(() => {
        if (checked) {
            const timeoutHandle = setTimeout(props.onDelete, 3000);
            return () => {
                clearTimeout(timeoutHandle);
            };
        }
    }, [checked])

    function handleCheckChange(e) {
        setChecked(e.target.checked);
    }

    const style = checked ? {
        textDecoration: 'line-through'
    } : {};

    return (
        <div className="list__item">
            <input type="checkbox" onChange={handleCheckChange} />
            <span style={style}>{props.text}</span>
        </div>
    );
}