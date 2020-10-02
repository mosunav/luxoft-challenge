import React, { useState, useEffect } from 'react'
import './DetailsPage.css'
import { PhotosGallery } from './PhotosGallery/PhotosGallery'
import { InfoDetails } from './InfoDetails/InfoDetails'
import { PageNotFound } from '../GlobalComponents/PageNotFound/PageNotFound'

export const DetailsPage = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    const chunksUrl = window.location.pathname.split('/')
    const articleId = chunksUrl[chunksUrl.length - 1]

    fetch(`${process.env.REACT_APP_API_ARTICULE_URL + articleId}`)
    .then(response => response.json())
    .then(data => {
      setData({...data})
    })
  }, [])

  return (
    <div>
      {data.status &&
        <PageNotFound />}

      {(data && data.included) ? 
        <PhotosGallery images={data.included.filter(el => el.type.toLowerCase().includes('images'))} /> : null}
      
      {(data && data.data && data.data.attributes) ? 
        <InfoDetails data={data.data.attributes} userData={data.included.filter(el => el.type.toLowerCase().includes("users"))} /> : null}

      {(data.status || data && data.included) ?
        <div className={"details-page-go-button-container"}>
          <a href={'/rentals/camper-vans/'} className={"details-page-go-button"}>Go to Campervans</a>
        </div> : null}
    </div>
  )
}