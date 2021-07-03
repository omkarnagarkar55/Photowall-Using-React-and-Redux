//import React,{Component} from 'react';

const { Link } = require("react-router-dom");


function Title(props){
    return <h1>
            <Link to="/">{props.head}</Link>
        </h1>
}

// class Title extends Component{
//     render(){
//         return <h1>{this.props.head}</h1>
//     }
// }

export default Title;