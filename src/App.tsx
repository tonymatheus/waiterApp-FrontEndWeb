import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <h1>Hello world</h1>
    </>
  );
}

export default App;
