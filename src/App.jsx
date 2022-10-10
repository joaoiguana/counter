import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter start={10}/>
      <Counter start={5}/>
    </div>
  );
}

export default App;
