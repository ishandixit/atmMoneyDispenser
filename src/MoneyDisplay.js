import React,{Component} from 'React';
import { connect } from 'react-redux';

class MoneyDisplay extends Component{


    render() {
        return (
            <div>
                <h1>You will get following amount</h1>
            </div>
        );
    }
}
const  mapStateToProps = (state) => {
        return {
            
        }
    }


export default connect(mapStateToProps)(MoneyDisplay)



