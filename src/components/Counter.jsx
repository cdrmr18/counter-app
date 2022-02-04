
import { useState } from 'react';

const Counter = ({ id, startCount, step = 1, onDelete }) => {
  const [count, setCount] = useState(startCount);

  const handleIncrease = () => {
    setCount(count + step)
  }

  const handleDecrease = () => {
    const newCount = count - step;
    setCount(Math.max(0, newCount))
  }

  const handleDelete = () => {
    onDelete(id);
  }

  return (
    <div className="m-4">
      <button className="btn btn-primary" onClick={handleDecrease}>-</button>
      <span className="m-4">{count}</span>
      <button className="btn btn-warning" onClick={handleIncrease}>+</button>
      <button className="btn btn-outline-danger ms-3" onClick={handleDelete}>Remove</button>
    </div>
  );
};

export default Counter;
