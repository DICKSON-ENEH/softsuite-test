import React from 'react';
import './App.scss';
import Sidebar from './componenets/sidebar/Sidebar';
import Elements from './pages/Elements';

function App() {
  return (
    <div className="app">
     <Sidebar />
     <Elements/>
    </div>
  );
}

export default App;
