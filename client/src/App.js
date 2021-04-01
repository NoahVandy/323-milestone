import React, {useState} from 'react';
import './App.css';

import NavDrawer from './components/NavDrawer';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <NavDrawer 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
