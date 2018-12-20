import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Increment, Decrement} from '../actions';

class Counter extends Component {

  increment = () => {
    this.props.Increment()
  }

  decrement = () => {
    this.props.Decrement()
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    count : state.count
})

const mapDispatchToProps = {
    Increment,
    Decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);