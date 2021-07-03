import Main from './main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/action';


function mapStateToProps(state){
    return {
        posts:state.post,
        comment:state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch);
}



const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App;