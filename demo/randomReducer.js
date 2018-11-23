export default function(state = 0, action) {
    switch(action.type) {
        case 'RANDOM': 
            return state + 1;
        default:
            return state;
    }
}