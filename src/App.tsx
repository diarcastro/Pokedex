import { useState } from 'react';
import Router from 'routes';
import GlobalAppContext from './contexts/GlobalApp';

const App = () => {
  const [state] = useState({});

  return (
    <main>
      <GlobalAppContext.Provider value={state}>
        <Router />
      </GlobalAppContext.Provider>
    </main>
  );
};

export default App;
