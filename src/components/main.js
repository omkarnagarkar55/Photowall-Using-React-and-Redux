import React,{Component} from 'react';
import AddPhoto from './addphoto';
import Photowall from './photowall';
import Title from './title';
import {Route} from 'react-router-dom';
import Single from './single';
//import {removePost} from '../redux/action';
 

// const posts1 = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg"
//     }, {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=08323785_735653395_n.jpg"
//     }, {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }];

class Main extends Component{
    // constructor(){
    //     super()
    // }
 
        // componentDidMount(){
        //     //this.props.dispatch(removePost(1));
        //     this.props.removePost(1);
        // }
    // removePhoto(postRemove){
    //     console.log("In removePhoto function");
    //     this.setState((state)=>({
    //         posts:state.posts.filter(post => post!== postRemove)
    //     }))
    // }
    // addPhoto(postSubmited){
    //     console.log("In the addPhoto method");
    //     this.setState((state)=>({
    //         posts:state.posts.concat(postSubmited)
            
    //     }))

        
    // }

    // navigate(){
    //     this.setState({
    //         screen: 'addphoto'
    //     });
    // }

    render(){
        console.log(this.props);
        return <div>
                <Title head ={"Photowall"}/>
                <Route exact path ="/" render = {() =>(
                    <div>
                    
                    <Photowall {...this.props} />
                </div>   
                )}/>
               
            
              
                <Route path="/addphoto" render ={({history})=>(
                    <AddPhoto {...this.props} onHistory={history}/>
                )}/>
                
                <Route path="/single/:id" render ={(params)=>(
                    <Single {...this.props} {...params} />
                )}/>
               </div> 
    }
}

export default Main;