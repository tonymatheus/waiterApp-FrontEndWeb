import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
