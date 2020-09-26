import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import './PriceLabel.css'

export const PriceLabel = props => {
  return (
    <div className="price-label-container">
      <p className="price-label-text"><b>${props.price}</b></p>
      <div className="price-label-stars-container">
        <Rating
            className="price-label-stars"
            name="half-rating-read"
            precision={0.1}
            size={"small"}
            value={parseFloat((props.score*5).toFixed(1))}
            readOnly
          />
      </div>
      {props.score !== null &&
        <Box
          className="price-label-box"
          size={"small"}
        >{`(${(props.score*5).toFixed(1)})`}</Box>
      }
    </div>
  )
}