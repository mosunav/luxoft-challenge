import React from 'react'
import './SearchFilter.css'

export const SearchFilter = ({onChange, value}) => {
  return (
    <div className="search-filter-container">
      <p className="search-filter-title">Filter</p>
      <input 
        className="search-filter-input"
        type="text"
        onChange={onChange}
        value={value}
      />
      <button className="search-filter-button" >Filter</button>
    </div>
  )
}