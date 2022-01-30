import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';
import { useState } from 'react';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, startCount: 2 },
    { id: 2, startCount: 10, step: 10 },
    { id: 3, startCount: 100, step: 100 },
  ]);

  const handleAddCounter = () => {

  }

  const handleRemoveCounter = () => {

  }
  return (
    <div className="container mt-5 text-center">
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.map(({ id, ...props }) => {
        return (
          <div key={id}>
            <Counter {...props} />
            <button onClick={handleRemoveCounter}> Remove</button>
          </div>
        );
      })}
    </div >
  );
}

export default App;