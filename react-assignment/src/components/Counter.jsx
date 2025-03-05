import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Counter</h2>
      <p className="mt-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}