//import {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function Photo(props){
    
    const post = props.post;
    const his = props.history || [];    
    return <figure className="figure">
        <Link to={`/single/${post.id}`}>
        <img className="photo" src ={post.imageLink} alt={post.description}/>
        </Link>                                                        
        <figcaption><p>{post.description}</p></figcaption>
        <div className= "button-container">
            <button  onClick= {()=>{ props.removePost(props.index) 
               his.push('/')}}>Remove</button>
             
             <Link className="button" to = {`single/${post.id}`}>
                <div className="comment-count">
                    {props.comment[post.id]?props.comment[post.id].length:0}
                </div>
            </Link>    
        </div>
       
        
            </figure>
}

Photo.propTypes ={
    post : PropTypes.object.isRequired,
    // onRemovePhoto : PropTypes.func.isRequired
}

// class Photo extends Component{
//     render(){
//         const post = this.props.post;
        
//         return <figure className="figure">
//             <img className="photo" src ={post.imageLink} alt={post.description}/>
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className= "button-container">
//                 <button className="remove-button">Remove</button>
//             </div>
            
//                 </figure>
//     }
// }
export default Photo;