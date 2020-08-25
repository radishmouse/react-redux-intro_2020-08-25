import Accounts from '../components/Accounts';
import { connect } from 'react-redux';
import { actionWithdraw } from '../actions';
import { actionDeposit } from '../actions';

const mapStateToProps = state => ({
    accounts: Object.keys(state).map(account => ({
        account,
        amount: state[account]
    }))
});

const mapDispatchToProps = dispatch => ({
    doDeposit: (howMuch, account) => {
        dispatch(actionDeposit(howMuch, account))
    },
    doWithdraw: (howMuch, account) => {
        dispatch(actionWithdraw(howMuch, account))
    }    
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);