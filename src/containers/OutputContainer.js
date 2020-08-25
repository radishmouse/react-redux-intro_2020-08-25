import Output from '../components/Output';
import { connect } from 'react-redux';

const ConfigurableOutputContainer = (whichAccount) => {
    const mapStateToProps = state => {
        // To "translate" we use something
        // like a Dictionary.
        // In JS, that's an Object!!!!
        return {
            // propName seen by React : value-in-state
            amount: state[whichAccount]
        }
    }

    return connect(mapStateToProps, null)(Output);
}

const mapStateToProps = state => {
    // To "translate" we use something
    // like a Dictionary.
    // In JS, that's an Object!!!!
    return {
        // propName seen by React : value-in-state
        amount: state.checking
    }
}
// let c = connect;
// let comp = connect(mapStateToProps, null)(Output);
// console.log(Output);
// console.log(Output({amount: 5}));
// console.log(c);
// console.log(comp);
// console.log(ConfigurableOutputContainer);

export default ConfigurableOutputContainer;
