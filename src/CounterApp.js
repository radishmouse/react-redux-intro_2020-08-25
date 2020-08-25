import React from 'react';
import Output from './containers/OutputContainer';
// import Increment from './components/Increment';
import Increment from './containers/IncrementContainer';

const CounterApp = props => (
    <div>
        <h1>The Most Amazing Counter App Ever</h1>
        {/* Output goes here */}
        <Output />
        {/* Increment button */}
        <Increment />
        {/* Decrement button */}
    </div>
);


export default CounterApp;