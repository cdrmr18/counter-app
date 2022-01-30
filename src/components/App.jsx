import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter';

const App = () => {
  return (
    <div className="container mt-5 text-center">
      <Counter startCount={2} step={100} />
      <Counter startCount={10} />
      <Counter startCount={25} step={10} />
    </div>
  );
}

export default App;
