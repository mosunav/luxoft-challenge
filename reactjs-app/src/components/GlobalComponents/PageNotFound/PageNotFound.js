import React from 'react'
import './PageNotFound.css'

export const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <img src={window.location.origin + '/img/page-not-found.jpeg'} width="100%" height="100%" alt="Not found" />
    </div>
  )
}