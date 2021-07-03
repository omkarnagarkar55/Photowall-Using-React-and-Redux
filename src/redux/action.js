import {database} from '../database/config';

export function startAddingPost(post){
    return (dispatch)=>{
        return database.ref('posts').update({[post.id]:post}).then(()=> {
            dispatch(addPhoto(post))})
    }
} 


export function removePost(index){
    return{
        type:'REMOVE_POST',
        index: index
    }
    
}

export function addPhoto(post){
    return {
        type:'ADD_POST',
        post:post
    }
}

export function addComment(comments,postId){
    return{
        type:'ADD_COMMENT',
        comment:comments,
        postId:postId
    }
}