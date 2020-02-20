import React from 'react';
import './App.css';
import Layout from './transaction/layout';


function App() {
  return (
    <div className="App">
      <header>
       My Transactions
      </header>
      <body>
        <Layout></Layout>
      </body>
    </div>
  );
}

export default App;
