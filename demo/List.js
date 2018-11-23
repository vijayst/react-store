import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-reducer-store';


function List(props) {
    const dispatch = useDispatch();

    function handleDelete(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }

    console.log('List component is rendering');

    return (
        <div className="list">
            {props.todo.map(item => (
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

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapStateToProps, List);