import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Orders } from './components/Orderds';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}

export default App;
