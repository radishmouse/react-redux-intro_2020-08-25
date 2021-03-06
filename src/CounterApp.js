import React from 'react';
import Output from './containers/OutputContainer';
// import Increment from './components/Increment';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';


const CounterApp = props => (
    <div>
        <h1>The Most Amazing Counter App Ever</h1>
        {/* Output goes here */}
        <Output />
        {/* Increment button */}
        <Increment />
        {/* Decrement button */}
        <Decrement />
    </div>
);

export default CounterApp;