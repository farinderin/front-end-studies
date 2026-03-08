import { useState } from 'react';

export default function CounterReact() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div className="text-4xl font-bold text-[#61DAFB]">{count}</div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(c => c - 1)}
          className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors"
        >−</button>
        <button
          onClick={() => setCount(0)}
          className="px-3 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm transition-colors"
        >reset</button>
        <button
          onClick={() => setCount(c => c + 1)}
          className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors"
        >+</button>
      </div>
    </div>
  );
}
