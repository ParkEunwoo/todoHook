import React from 'react';
import Store from './Store';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';

const App: React.FC = () => {
  return (
    <Store>
      <Header />
      <Form />
      {/*<List />} */}
    </Store>
  );
}

export default App;
