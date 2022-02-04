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
    setCounters([{id: new Date().getTime(), startCount: 0}, ...counters]);
  }

  const handleRemoveCounter = (id) => {
    const newCounter = counters.filter((counter) => counter.id !== id)
    setCounters(newCounter)
  }

  return (
    <div className="container mt-5 text-center">
      <button onClick={handleAddCounter}>Add Counter</button>
      {counters.map(({ id, ...props }) => {
        return (
          <div key={id}>
            <Counter id={id} {...props} onDelete={handleRemoveCounter} />
          </div>
        );
      })}
    </div >
  );
}

export default App;