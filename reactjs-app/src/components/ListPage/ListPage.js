import React, { useState } from 'react'
import { SearchFilter } from './SearchFilter/SearchFilter'
import "./ListPage.css"

export const ListPage = () => {

  const [inputText, setInputText] = useState("")

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
        <div className="list-page-load-more">
          <button className="list-page-load-more-button">Load more</button>
        </div>
      </div>
    </div>
  )
}