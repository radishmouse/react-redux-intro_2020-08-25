import React from 'react';
import Output from './Output';

const Accounts = props => (
    props.accounts.map(({account, amount}) => (
        <Output
            account={account}
            amount={amount}
        />
    ))
)

export default Accounts;