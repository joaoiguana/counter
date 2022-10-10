import { useState } from 'react';

const Counter = ({ start }) => {
  const [count, setCount] = useState(start);

  const handleMinus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return <div className="m-3 d-flex align-items-center justify-content-center">
    <button className="btn btn-danger me-2" onClick={handleMinus}>-</button>
    <span className="fs-5">{count}</span>
    <button className="btn btn-success ms-2" onClick={handlePlus}>+</button>
  </div>
};

export default Counter;
