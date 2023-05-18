import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Counter App </h1>
      <button style={{
          fontSize: '60%',
          position: 'relative',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',  }}
            onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button style={{
          fontSize: '60%',
          position: 'relative',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',  }}
           onClick={() => setCount(0)}>
        Reset
      </button>
      
      <button style={{
          fontSize: '60%',
          position: 'relative',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',  }}
            onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <p>You clicked {count} times</p>
      

    </div>
    

  );
}

export default Counter; 