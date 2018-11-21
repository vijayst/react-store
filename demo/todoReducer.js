let i = 1;

export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO': {
            const newState = state.slice();
            newState.push({
                id: i++,
                text: action.text
            });
            return newState;
        }
        case 'DELETE_TODO': {
            const index = state.findIndex(item => item.id === action.id);
            if (index !== -1) {
                const newState = state.slice();
                newState.splice(index, 1);
                return newState;
            }
            return state;
        }
        default:
            return state;
    }
}