import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import EmployeeList from './resource/employee.tools';
import Box from './components/Box(example)';

function App() {
  const [count, setCount] = useState(0);

  const logEmployeeNames = () => {
    EmployeeList.forEach(employee => {
      console.log(employee.name.toString());
    });
  };

  return (
    <div className=" bg-slate-700 text-white w-screen h-screen">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Box text="Hello Exer" />

      <button onClick={() => setCount((count) => count + 1)} className="bg-slate-950 shadow-2xl p-4 m-4 rounded-xl">
        count is {count}
      </button>
      <button onClick={logEmployeeNames} className="bg-slate-950 shadow-2xl p-4 m-4 rounded-xl"> Log Employee Names</button>
        
    </div>
  );
}

export default App;
