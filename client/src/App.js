import React, {useState} from 'react';
import './App.css';

import NavDrawer from './components/NavDrawer';
import AppBar from './components/Reusable/AppBar';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <AppBar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <NavDrawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
