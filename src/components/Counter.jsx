
import { useState } from 'react';

const Counter = ({ startCount, step = 1 }) => {
  const [count, setCount] = useState(startCount);

  const handleIncrease = () => {
    setCount(count + step)
  }

  const handleDecrease = () => {
    const newCount = count - step;
    setCount(Math.max(0, newCount))
  }
  return (
    <div className="m-4">
      <button className="btn btn-primary" onClick={handleDecrease}>-</button>
      <span className="m-4">{count}</span>
      <button className="btn btn-warning" onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counter;
