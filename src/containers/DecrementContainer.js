import React from 'react';
import { connect } from 'react-redux';
import { actionWithdraw } from '../actions';

const Decrement = props => (
    <button
        onClick={props.handleClick}
    >
        Buy some 💩💩💩 
    </button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionWithdraw(1000, 'checking'));
            console.log('You bought something useless!')
        }
    }
}

// I will replace this with the smart connected
// version.
export default connect(null, mapDispatchToProps)(Decrement);