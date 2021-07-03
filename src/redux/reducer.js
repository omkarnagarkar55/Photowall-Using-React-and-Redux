import posts from '../data/posts';
import {combineReducers} from 'redux';

// As the state is immutable ,we produce a filtered copy of the array
function post(state = posts, action){
    // console.log(action.index)
    // console.log(action.post)
    switch(action.type){
        case 'REMOVE_POST' : return [...state.splice(0,action.index),...state.splice(action.index+1)];
        case 'ADD_POST' : return [...state,action.post];
        default: return state;
    }
}

function comments(state={},action){
    
    switch(action.type){
        case 'ADD_COMMENT':
            if(!state[action.postId]){
            return {...state,[action.postId]:[action.comment]}
            }else{
                return {...state,[action.postId]:[...state[action.postId],[action.comment]]}
            }
        default : return state
    }
}

const rootReducer = combineReducers({post,comments})

export default rootReducer
