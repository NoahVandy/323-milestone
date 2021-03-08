import React from 'react';

import SearchBarView from './view';

export default function SearchBar({ value, onChange }) {
  return (
    <SearchBarView 
      handleChange={onChange}
      value={value}
    />
  )
}