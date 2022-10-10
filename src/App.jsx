import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Counter from './components/Counter';

const App = () => {
  const [counters, setCounters] = useState([
    {id: 1, start: 10, step: 6 },
    {id: 2, start: 5 },
    {id: 3, start: 0, step: 13 }
  ])

  return (
    <div>
      {counters.map((counter) => {
        return <Counter start={counter.start} step={counter.step} />
      })}
    </div>
  );
}

export default App;
