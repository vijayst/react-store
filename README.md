# react-reducer-store
Global state with React hooks and Context API

## Demo app
Demo app uses the live version of react-reducer-store. To run the Demo app.
```
yarn global add parcel-bundler
parcel demo/index.html
```

## Usage
### Combine reducers
Write as many reducers as you want in your React app. Combine all the reducers to a root reducer as follows.
```
import { combineReducers } from 'react-reducer-store';
import todoReducer from './todoReducer';

export default combineReducers({
    todo: todoReducer
});
```

### Use Store component
Wrap the root component of your project with Store component
```
import { Store } from 'react-reducer-store';
import rootReducer from './rootReducer';

export default function App() {
    return (
        <Store rootReducer={rootReducer}>
            <Form />
            <List />
        </Store>
    );
}
```

### Use useStore hook
Use the store from the List component.
```
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
```

I will continue to actively work on this repo as time permits. At the end, I want to have something of an opinionated store for React apps similar to Redux, React Redux, Redux Logger, Redux Thunk all combined into one package.
