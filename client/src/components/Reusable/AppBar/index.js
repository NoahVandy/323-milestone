import React from 'react';

import AppBarView from './view';

export default function AppBar ({isOpen, setIsOpen, handleLoginPopup}) {

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <AppBarView
      toggleOpen={toggleOpen}
      handleLoginPopup={handleLoginPopup}
    />
  )
}