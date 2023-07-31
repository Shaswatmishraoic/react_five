import React, { useState } from 'react';
import Hoc from './compo/Hoc';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

function App() {
  return (
    <>
    <div className="center">
      <Counter />
    </div>
    <p>In React, a "pure function component" is often referred to as a stateless functional component or simply a functional component. Before the introduction of React hooks, these components were the primary way to create reusable and lightweight components in React.

A pure function component is a JavaScript function that takes props as its input and returns JSX (or elements) as its output. It doesn't have its own internal state or lifecycle methods like class components do. This makes it a simple and predictable way to define components that depend only on the input props.</p>
<p>Explanation:

We import React and useState from the 'react' package. useState is a hook that allows us to add state to our functional component.
We define a functional component called Counter. It uses the useState hook to add a state variable called count, which is initialized to 0. The setCount function is used to update the count state.
Inside the Counter component, we render the current value of count and a button labeled "Increment." The onClick event of the button is attached to the increment function, which increases the count state by 1 when the button is clicked.
The App component is the main component that renders the Counter component. It's the top-level component in this simple example.
This example demonstrates a functional component (Counter) with local state managed by the useState hook. The App component serves as the entry point, rendering the Counter component. When the "Increment" button is clicked, the counter updates and re-renders to show the updated value.</p>
    <div>
      <Hoc name="Shaswat Mishra" message="Welcome to the HOC example!" />
    </div>
    </>
  );
}

export default App;
