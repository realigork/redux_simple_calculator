import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actions from '../../store/actions';

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
        <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
        <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>

        <ul>
          {this.props.results.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}>
                {result.val}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counterReducer.counter,
    results: state.resultsReducer.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actions.increment()),
    onDecrementCounter: () => dispatch(actions.decrement()),
    onAddCounter: () => dispatch(actions.add(10)),
    onSubtractCounter: () => dispatch(actions.subtract(10)),
    onStoreResult: (res) => dispatch(actions.storeResult(res)),
    onDeleteResult: (id) => dispatch(actions.deleteResult(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);