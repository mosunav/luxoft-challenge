import React from 'react';
import SearchField from './SearchField';
import Cards from './Cards';

export default function Home() {
  return (
    <div>
      <h1 className="header">Campervans</h1>
      <SearchField />
      <Cards />
    </div>
  );
}
