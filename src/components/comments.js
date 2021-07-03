import React,{Component} from 'react';

class Comments extends Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(event.target.elements.comment.value)
        const comment = event.target.elements.comment.value
        this.props.addComment(comment,this.props.id)
        event.target.elements.comment.value=''
    }
    render(){
        console.log(this.props.comment)
        return <div className="comment">
            {
                this.props.comment.map((comment,index) =>{
                    return(
                        <p key= {index}>{comment}</p>
                    )
                })
            }
            <form onSubmit= {this.handleSubmit} className="comment-form">   
                <input type="text" name ="comment" placeholder="Comments"/>
                <input type="submit" placeholder="Submit" hidden/> 
            </form>
         </div>
         
    }
}

export default Comments;