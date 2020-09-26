import React from 'react'
import './PhotosGallery.css'

export const PhotosGallery = ({images}) => {
  const onImageError = (e) => {
    e.target.src = window.location.origin + '/img/image-not-found.png'
  }

  return (
    <div className="photos-gallery-container-overflow">
      <div className="photos-gallery-container">
        {images.map(image => (
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
    </div>
  )
}