import React,{Component} from 'react';
import Comments from './comments';
import Photo from './photo';

class Single extends Component{
    render(){
        const { match ,posts} = this.props;
        const id = match.params.id;
        const comment = this.props.comment[id] || []
        const post = posts.find((post)=>post.id===id);
        const index = this.props.posts.findIndex((post)=> post.id=id)
        return <div className="single-photo">
            <Photo post = {post} {...this.props} index={index}/>
            <Comments addComment={this.props.addComment} comment={comment} id={id} /> 
            </div>
    }
}

export default Single;