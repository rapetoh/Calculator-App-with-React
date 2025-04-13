// React Calculator App
import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center"
    style={{
        margin: 'auto', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
    }}
    >
      <div className="bg-white p-6 rounded-xl shadow-xl w-72"
      style={{
        backgroundColor: 'white',       // bg-white
        padding: '1.5rem',              // p-6 (6 * 0.25rem = 1.5rem)
        borderRadius: '0.75rem',        // rounded-xl
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // shadow-xl
        width: '18rem',                 // w-72 (72 * 0.25rem = 18rem)
      }}
      >
        <div className="mb-4">
          <div className="text-right text-xl bg-gray-200 rounded p-2 mb-1 min-h-[40px]">{input}</div>
          <div className="text-right text-2xl font-bold bg-gray-100 rounded p-2 min-h-[40px]">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '0.5rem' 
        }}
        >
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => (btn === '=' ? handleCalculate() : handleClick(btn))}
              className="bg-blue-500 text-white text-lg p-3 rounded hover:bg-blue-600"
              style={{
                backgroundColor: '#3b82f6', // Tailwind's bg-blue-500
                color: 'white',
                fontSize: '1.125rem', // text-lg
                padding: '0.75rem',   // p-3
                borderRadius: '0.5rem', // rounded
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'} // hover:bg-blue-600
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              {btn}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="col-span-4 bg-red-500 text-white text-lg p-3 rounded hover:bg-red-600"
            style={{
              gridColumn: 'span 4',           // col-span-4
              backgroundColor: '#ef4444',     // bg-red-500
              color: 'white',
              fontSize: '1.125rem',           // text-lg
              padding: '0.75rem',             // p-3
              borderRadius: '0.5rem',         // rounded
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dc2626'} // hover:bg-red-600
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
