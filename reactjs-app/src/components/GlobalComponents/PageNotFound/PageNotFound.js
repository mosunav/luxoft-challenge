import React from 'react'
import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <img 
        className={'page-not-found-image'}
        src={window.location.origin + '/img/page-not-found.jpeg'}
        alt="Not found"
      />
    </div>
  )
}