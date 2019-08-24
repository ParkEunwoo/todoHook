import React from 'react';
import Header from './Header';
import Form from './Form';
import List from './List';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
