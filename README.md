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
import randomReducer from './randomReducer';

export default combineReducers({
    todo: todoReducer,
    random: randomReducer
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

### Use useDispatch hook
Use the useDispatch hook to get the dispatch function to root reducer.
```
import { useDispatch } from 'react-reducer-store';

export default function Form(props) {
    const dispatch = useDispatch

    function handleRandom() {
        dispatch({ type: 'DO_RANDOM' });
    }
```

### Use useStore hook
Use the store from the List component. Using the useStore hook will cause too many renders. So, recommend to use the connect higher order component shown below.
```
import { useStore, useDispatch } from 'react-reducer-store';

export default function List() {
    const state = useStore();
    const dispatch = useDispatch();

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

### Use connect HOC
connect function takes in mapStateToProps and component and returns a new component. The new component computes the requisite state from the global context. The state is attached to the props of the component. If there is no change in the props, then the wrapped component does not render.
```
import { connect } from 'react-reducer-store';

function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapStateToProps, List);

```

### Logging
To add logging to the console, set the log prop on the Store to true.
```
<Store rootReducer={rootReducer} log={true}>
  ...
</Store>
```

Output looks like below:

![Log Output](https://github.com/vijayst/react-store/blob/master/log.png?raw=true)
