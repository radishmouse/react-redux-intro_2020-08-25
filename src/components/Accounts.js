import React from 'react';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';

const Accounts = props => (
    props.accounts.map(({account, amount}) => (
        <>
            <Output
                account={account}
                amount={amount}
            />
            <Increment
                handleClick={() => {
                    props.doDeposit(50, account)
                }}
            />
            <Decrement
                handleClick={() => {
                    props.doWithdraw(50, account)
                }}
            />
        </>
    ))
)

export default Accounts;