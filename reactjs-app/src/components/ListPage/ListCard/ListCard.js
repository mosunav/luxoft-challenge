import React from 'react'
import { PriceLabel } from '../PriceLabel/PriceLabel'
import { useHistory } from 'react-router-dom'
import "./ListCard.css"

export const ListCard = ({data, path}) => {
  const history = useHistory();

  const goToHandler = () => {
    history.push(path)
  }

  const onImageError = (e) => {
    e.target.src = window.location.origin + '/img/image-not-found.png'
  }

  return (
    <div className="list-card-container" onClick={goToHandler}>
      <div className="list-card-column">
        <img
          className="list-card-image"
          src={data.primary_image_url}
          alt={'Image_Not_Found'}
          onError={onImageError}
        />
      </div>
      <div className="list-card-column list-card-info-details-column">
        <p className="list-card-info-type">{`${data.type.toUpperCase()} `} &#9679; {` ${data.location.city.toUpperCase()}, ${data.location.state.toUpperCase()}`}</p>
        <p className="list-card-info-name"><b>{data.name}</b></p>
        <PriceLabel price={data.price_per_day} score={data.owner_score} />
      </div>
    </div>
  )
}