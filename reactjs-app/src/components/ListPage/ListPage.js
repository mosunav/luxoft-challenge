import React, { useState, useEffect } from 'react'
import { SearchFilter } from './SearchFilter/SearchFilter'
import { ListCard } from './ListCard/ListCard'
import "./ListPage.css"

export const ListPage = () => {

  const [inputText, setInputText] = useState("")
  const [camperVans, setCamperVans] = useState([])

  // inititalResults is filled with initial data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LIST_URL}&page[limit]=8`)
    .then(response => response.json())
    .then(data => {
      setCamperVans(data.data)
    })
  }, []);

  const onChangeHandler = e => {
    setInputText(e.target.value)
  }
  
  return (
    <div className="list-page-container">
      <div className="list-page-search-container">
        <p className="list-page-main-title">Campervans</p>
        <SearchFilter
          onChange={onChangeHandler}
          value={inputText}
        />
        <div className="list-page-results-container">
          {camperVans.map(elem => {
            return <ListCard key={elem.id} data={elem.attributes} path={`/rentals/camper-vans/details/${elem.id}`} />
          })}
        </div>
        <div className="list-page-load-more">
          <button className="list-page-load-more-button">Load more</button>
        </div>
      </div>
    </div>
  )
}