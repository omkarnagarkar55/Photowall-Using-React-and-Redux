import {Component} from 'react';




class AddPhoto extends Component{

    constructor(){
        super();
       this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const description = event.target.elements.description.value;
        const imageLink = event.target.elements.link.value;
        if(description && imageLink){
            const post = {
                id:Number(new Date()),
                description: description,
                imageLink : imageLink
            }
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
            //console.log(post);
        }
    }

    render(){
        return (
            <div>
                
                <div className="form">
                    <form onSubmit= {this.handleSubmit}>
                        <input type="text" name= 'link' placeholder="Link"/>
                        <input type="text" name= 'description' placeholder="Description"/>
                        <button type='submit'>Post</button>
                    </form>
                </div>
            </div>
            )
        }
}

// class AddPhoto extends Component{
//     render(){
//         return <h1> This is the add photo page</h1>
//     }
// }

export default AddPhoto;