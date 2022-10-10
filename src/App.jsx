import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Counter from './components/Counter';

const App = () => {
  const [counters, setCounters] = useState([
    {id: 1, start: 10, step: 6 },
    {id: 2, start: 5 },
    {id: 3, start: 0, step: 13 },
    {id: 4, start: 13 }
  ]);

  // const handleDelete = (counterToDelete) => {
  //   const newList = counters.filter((counter) => counter !== counterToDelete);
  //   setCounters(newList);
  // }

  const handleDelete = (id) => {
    const newList = counters.filter((counter) => counter.id !== id);
    setCounters(newList);
  }

  return (
    <div>
      <h1 className='d-flex justify-content-center'>Counters List</h1>
      {counters.map((counter) => {
        return (
          <div key={counter.id} className='d-flex align-items-center justify-content-center'>
            <Counter start={counter.start} step={counter.step} />
            <button className='btn btn-outline-danger' onClick={() => handleDelete(counter.id)}>
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
