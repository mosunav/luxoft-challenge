import React, { useState, useEffect, useCallback } from 'react'
import { ListCard } from './ListCard/ListCard'
import { SearchFilter } from './SearchFilter/SearchFilter'
import { LoadingBar } from '../GlobalComponents/LoadingBar/LoadingBar'
import "./ListPage.css"

let notFilteredResults = []

export const ListPage = () => {

  const [camperVans, setCamperVans] = useState([])
  const [inputText, setInputText] = useState("")
  const [pageOffset, setPageOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [buttonTitle, setButtonTitle] = useState('Filter')

  // inititalResults is filled with initial data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LIST_URL}&page[limit]=8`)
    .then(response => response.json())
    .then(data => {
      notFilteredResults = [...data.data]
      setCamperVans([...notFilteredResults])
      setLoading(false)
    })
  }, []);

  // Load more event
  useEffect(() => {
    if (pageOffset) {
      fetch(`${process.env.REACT_APP_API_LIST_URL}&page[offset]=${pageOffset}&page[limit]=8`)
      .then(response => response.json())
      .then(data => {
        const ids = new Set(notFilteredResults.map(elem => elem.id))
        const finalArray = [...notFilteredResults, ...data.data.filter(elem => {
          return !ids.has(elem.id)
        })]
        notFilteredResults = [...finalArray]
        setCamperVans([...notFilteredResults])
        setLoading(false)
      })
    }
  }, [pageOffset])

  const loadMoreHandler = useCallback(() => {
    setPageOffset(pageOffset + 8)
    setInputText("")
    setLoading(true)
    setButtonTitle('Filter')
  }, [pageOffset])

  const onChangeHandler = useCallback(e => {
    setInputText(e.target.value)
    if (e.target.value === "") {
      setButtonTitle('Remove Filter')
    } else {
      setButtonTitle('Filter')
    }
  }, [])

  const filterCamperVans = () => {
    if (inputText !== "") {
      setCamperVans(notFilteredResults.filter(camperVan => {
        return camperVan.attributes.name.toUpperCase().includes(inputText.toUpperCase())
      }))
    } else {
      setButtonTitle('Filter')
      setCamperVans([...notFilteredResults])
    }
  }
  
  return (
    <div className="list-page-container">
      <div>
        <div className="list-page-search-container">
          <p className="list-page-main-title">Campervans</p>
          <SearchFilter
            onChange={onChangeHandler}
            onClick={filterCamperVans}
            value={inputText} 
            buttonTittle={buttonTitle}
          />
        </div>
        <div className="list-page-results-container">
          {camperVans.map(elem => {
            return <ListCard key={elem.id} data={elem.attributes} path={`/rentals/camper-vans/details/${elem.id}`} />
          })}
        </div>
        {(loading) ? 
          <LoadingBar />
          : (
            <div className="list-page-load-more">
              <button className="list-page-load-more-button" onClick={loadMoreHandler}>Load more</button>
            </div>
          )}
      </div>
    </div>
  )
}