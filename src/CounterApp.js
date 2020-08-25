import React from 'react';
import Output from './containers/OutputContainer';
// import Increment from './components/Increment';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';

import SavingsOutput from './containers/SavingsOutputContainer';
import SavingsIncrement from './containers/SavingsIncrementContainer';
import SavingsDecrement from './containers/SavingsDecrementContainer';


const CounterApp = props => (
    <div>
        <h1>The Most Amazing Counter App Ever</h1>
        <hr />
        <h2>Checking</h2>
        <Output />
        <Increment />
        <Decrement />
        <hr />
        <h2>Savings</h2>
        <SavingsOutput />
        <SavingsIncrement />
        <SavingsDecrement />
    </div>
);

export default CounterApp;