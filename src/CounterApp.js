import React from 'react';
import Output from './containers/OutputContainer';
// import Increment from './components/Increment';
import Increment from './containers/IncrementContainer';
import Decrement from './containers/DecrementContainer';

const outputs = ['checking', 'savings'].map(accountName => Output(accountName));

console.log(<div />);
console.log(outputs[0]);

const SavingsOutput = Output('checking')

const CounterApp = props => (
    <div>
        <h1>The Most Amazing Counter App Ever</h1>
        {/* Output goes here */}
        {outputs.map(O => <O />)}
        <hr />
        <SavingsOutput />
        {/* Increment button */}
        <Increment />
        {/* Decrement button */}
        <Decrement />
    </div>
);

export default CounterApp;