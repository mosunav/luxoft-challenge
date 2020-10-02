import React from 'react'
import './InfoDetails.css'

export const InfoDetails = ({data, userData}) => {

  const formatedType = data.type.split('-').join(' ').toUpperCase()

  const onImageError = (e) => {
    e.target.src = window.location.origin + '/img/image-not-found.png'
  }

  return (
    <div className="info-details-container">
      <div className="info-details-titles-container">
        <p className="info-details-type">{`${formatedType} `} &#9679; {` ${data.location.city.toUpperCase()}, ${data.location.state.toUpperCase()}`}</p>
        <p className="info-details-name"><b>{data.name}</b></p>
      </div>
      <div className="info-details-price-container">
        <div className="info-details-price-label">${data.price_per_day}</div>
      </div>
      <div className="info-details-avatar-container">
        <img
          className="info-details-avatar-image"
          src={userData[0].attributes.avatar_url}
          alt={`${userData[0].attributes.first_name} ${userData[0].attributes.last_name}`}
          onError={onImageError}
        />
        <p className="info-details-avatar-name">{`${userData[0].attributes.first_name} ${userData[0].attributes.last_name}`}</p>
      </div>
    </div>
  )
}