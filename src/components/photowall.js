import React from 'react';
import Photo from './photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import {Component} from 'react';

function Photowall(props){
    return <div> 
        <Link className='addIcon' onClick={props.navigate} to="/addphoto" ></Link>
    {/* <button className="addIcon" onClick={props.navigate}>+</button>  */}
                <div className="photo-grid">
                    {props.posts.sort(function(x,y){return y.id-x.id}).map((post,index) => <Photo key = {index} post = {post} {...props} index={index}/>)}
                </div>
            </div>    
}

// class Photowall extends Component{
//     render(){
//         return <div className="photo-grid">
//                     {this.props.posts.map((post,index) => <Photo key = {index} post = {post}/>)}
//                 </div>
//     }
// }

Photowall.propTypes ={
    posts:PropTypes.array.isRequired,
    // onRemovePhoto : PropTypes.func.isRequired
}

export default Photowall;