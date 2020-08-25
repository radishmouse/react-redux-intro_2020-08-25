import Increment from '../components/Increment';
import { connect } from 'react-redux';

import { actionDeposit } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        // propName in React : a fn that calls dispatch
        handleClick: () => {
            dispatch(actionDeposit(100, 'savings'));
            console.log('You deposited $$$ into savings');
        }
    }
}

export default connect(null, mapDispatchToProps)(Increment);