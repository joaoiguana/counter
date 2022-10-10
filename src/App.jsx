import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter start={10} step={6} />
      <Counter start={10} />
    </div>
  );
}

export default App;
