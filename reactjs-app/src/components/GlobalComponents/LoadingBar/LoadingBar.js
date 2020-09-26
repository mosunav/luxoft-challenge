import React from 'react'
import './LoadingBar.css'
import LinearProgress from '@material-ui/core/LinearProgress';

export const LoadingBar = () => {
  return (
    <div className="loading-bar-container">
      <LinearProgress color="primary" />
      <LinearProgress color="primary" />
    </div>
  )
}