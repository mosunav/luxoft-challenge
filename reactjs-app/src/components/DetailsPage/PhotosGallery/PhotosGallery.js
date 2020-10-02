import React, { useRef } from 'react'
import './PhotosGallery.css'

export const PhotosGallery = ({images}) => {

  const containerScrollRef = useRef(null)

  const fillsWithNotFoundImages = () => {
    const imagesNumber = (4 - images.length)
    const imagesNotFoundArray = []
    for (let i; i <= imagesNumber; i++) {
      imagesNotFoundArray.push({
        id: `imageNotFound${i}`,
        attributes: {
          url: `${window.location.origin}/img/image-not-found.png`
        }
      })
    }
    return imagesNotFoundArray
  }

  const onImageError = (e) => {
    e.target.src = window.location.origin + '/img/image-not-found.png'
  }

  const scrollToLeftHandler = () => {
    containerScrollRef.current.scrollTo({
      behavior: 'smooth',
      left: 0
     })
  }

  const scrollToRightHandler = () => {
    containerScrollRef.current.scrollTo({
      behavior: 'smooth',
      left: containerScrollRef.current.scrollWidth
     })
  }

  return (
    <div className="photos-gallery-container-overflow" ref={containerScrollRef}>
      <div className="photos-gallery-container">
        {images.map((image, index) => (
          (index === 3) ? 
          <div key={image.id} className="photos-gallery-image-container-no-margin">
            <img
              className="photos-gallery-image"
              alt={'Not found'}
              src={image.attributes.url}
              onError={onImageError}
            />
          </div>
          :
          <div key={image.id} className="photos-gallery-image-container">
            <img
              className="photos-gallery-image"
              alt={'Not found'}
              src={image.attributes.url}
              onError={onImageError}
            />
          </div>
        ))}
        {fillsWithNotFoundImages().map(image => (
          <div key={image.id} className="photos-gallery-image-container">
            <img
              className="photos-gallery-image"
              alt={'Not found'}
              src={image.attributes.url}
              onError={onImageError}
            />
          </div>
        ))}
      </div>
      <button className={'photos-gallery-left-scroll-button'} onClick={scrollToLeftHandler}>{'<'}</button>
      <button className={'photos-gallery-right-scroll-button'} onClick={scrollToRightHandler}>{'>'}</button>
    </div>
  )
}