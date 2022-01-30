
import { useState } from 'react';

const Counter = ({ startCount, step }) => {
  const [count, setCount] = useState(startCount);

  const handleIncrease = () => {
    let amount = step || 1
    setCount(count + amount)
  }

  const handleDecrease = () => {
    let amount = step || 1

    if (count === 0) {
      return;
    }

    setCount(count - amount)
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
