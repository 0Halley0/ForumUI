import { useState } from "react";

function FunctionComponentExample(props) {
  const [count, setCount] = useState(0);
  const countPlusHandleClick = () => {
    setCount(count + 1);
  };
  const countMinusHandleClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Function Example</h1>
      <p>Count:{count}</p>
      <button
        className="btn btn-primary ms-2"
        onClick={countPlusHandleClick}
      >
        +
      </button>
      <button
        className="btn btn-secondary ms-2"
        onClick={countMinusHandleClick}
      >
        -
      </button>
    </div>
  );
}

export default FunctionComponentExample;
