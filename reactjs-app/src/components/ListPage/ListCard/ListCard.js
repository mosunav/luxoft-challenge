import React from 'react'
import "./ListCard.css"

export const ListCard = ({data, path}) => {

  return (
    <div className="list-card-container">
      <div className="list-card-column">
        <img
          className="list-card-image"
          src={data.primary_image_url}
          alt={'Image_Not_Found'}
        />
      </div>
      <div className="list-card-column list-card-info-details-column">
        <p className="list-card-info-type">{`${data.type.toUpperCase()} `} &#9679; {` ${data.location.city.toUpperCase()}, ${data.location.state.toUpperCase()}`}</p>
        <p className="list-card-info-name"><b>{data.name}</b></p>
      </div>
    </div>
  )
}