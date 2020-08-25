import Increment from '../components/Increment';
import { connect } from 'react-redux';

import { actionDeposit } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        // propName in React : a fn that calls dispatch
        handleClick: () => {
            dispatch(actionDeposit(100, 'checking'));
            console.log('You deposited $$$ into checking');
        }
    }
}

export default connect(null, mapDispatchToProps)(Increment);