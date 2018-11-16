// LightContainer.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
    addOne: () => dispatch({ type: "ADD" }),
    removeOne: () => dispatch({ type: "REMOVE" }),
    reset: () => dispatch({ type: "CLEAR" })
  });
  
  const CounterComponent = ({ counter, addOne,removeOne,reset }) => (
    <div>
      <p>{counter}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )
  (CounterComponent);
  