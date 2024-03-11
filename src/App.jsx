import TodoList from './components/TodoList'
import Home from './components/Home'
import './App.css'
import { useState } from "react";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Home" />
        <Tab label="Todolist" />
      </Tabs>
      {value === 0 && <Home />}
      {value === 1 && <TodoList />}
    </div>
  );
}

export default App
