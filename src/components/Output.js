import React from 'react';

const Output = props => (
    <div>
        <h3>
            The available {props.account} balance is: ${props.amount || 0}          
        </h3>
    </div>
);

export default Output;