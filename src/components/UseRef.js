import React, {useRef, useState} from 'react'

const UseRef = () => {
   
    const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const incrementCount = () => {
    countRef.current += 1;
    console.log('Count:', countRef.current);
  };

  const forceRender = () => {
    setRenderCount((prev) => prev + 1);
  };



  return (
    <div>
      <h1>5.UseRef:-</h1>
         <p>Render Count: {renderCount}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={forceRender}>Force Render</button>
    </div>
  )
}

export default UseRef

