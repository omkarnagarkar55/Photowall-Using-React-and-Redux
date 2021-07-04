
import ReactDom from 'react-dom';
//import Main from './components/main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore,compose} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import App from './Components/App';
import thunk from 'redux-thunk';
import {database} from './database/config'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));

//const tasks =['task1','task2','task3'];

//const element = React.createElement('ol',null, tasks.map((task,index)=>React.createElement('li',{key:index},task)));

// const element = 
//     <div>
//         <h1>Header of the list</h1>
//         <ol>
//             {tasks.map((task,index)=> <li key = {index} >{task}</li>)}    
//         </ol>
//     </div>    


ReactDom.render(<Provider store ={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));