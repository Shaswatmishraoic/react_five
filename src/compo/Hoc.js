import React, { useState, useEffect } from 'react';
import './compo.css';

// Higher-order function that takes a component as an argument and returns a new component
const withLoading = (WrappedComponent) => {
  return function Hoc(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate an asynchronous data fetching process
      const fetchData = async () => {
        // Assuming the data fetching takes 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Pass the original props to the wrapped component
    return <WrappedComponent {...props} />;
  };
};

// Regular component that will be wrapped by the HOC
const MyComponent = (props) => {
  return (
    <div>
      <h1 className='center'>Hello, {props.name}!</h1>
      <p className='center'>{props.message}</p>
      <p>In React, a higher-order function (HOC) is a function that takes a component as its argument and returns a new component. The HOC is a powerful pattern in React used for code reuse, logic abstraction, and cross-cutting concerns such as authentication, logging, and data fetching. It allows you to wrap a component with additional functionalities without modifying its original implementation.</p>
      <p>In this example, when you run the application, you'll see the "Loading..." message for 2 seconds before the actual content of MyComponent is rendered, simulating a data fetching process. The HOC takes care of managing the loading state, and the wrapped component (MyComponent) remains clean and unaware of the loading logic.</p>
    </div>
  );
};

// Wrap MyComponent with the withLoading HOC
const Hoc = withLoading(MyComponent);

export default Hoc;
