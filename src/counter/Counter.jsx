import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container w-50 my-5 border bg-white border-black rounded-2 mx-auto text-center">
        <h1 className="text-center fw-bold mb-2 mt-2">Counter</h1>
        <h1 className="text-center fw-bold mb-3 ">{count}</h1>

        <div className="d-flex align-items-center justify-content-around gap-0">
          <div className="btn-1">
            <button
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
              className="btn btn-danger mb-4 px-5 py-2 fw-bold text-dark"
            >
              Decrease
            </button>
          </div>
          <div className="btn-2">
            <button
              onClick={() => setCount(0)}
              className="btn btn-warning mb-4 px-5 py-2 fw-bold text-dark"
            >
              Reset
            </button>
          </div>
          <div className="btn-3">
            <button
              onClick={() => setCount(count + 1)}
              className="btn btn-success mb-4 px-5 py-2 fw-bold text-dark"
            >
              Increase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
