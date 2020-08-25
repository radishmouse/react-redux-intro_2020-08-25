import Accounts from '../components/Accounts';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    accounts: Object.keys(state).map(account => ({
        account,
        amount: state[account]
    }))
});

export default connect(mapStateToProps, null)(Accounts);