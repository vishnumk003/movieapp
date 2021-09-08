import React from 'react'
import '../imageviewer/ImageViewer.scss'
import { Link } from 'react-router-dom'

export default function ImageViewer({images={}}) {
  return (
    <div className="image-viewer-component">
      <Link  to={`/movie-home/${images.imdbID}/details`}>
        <img 
          src={images.Poster} 
          width="100%"
          height="300px"
          alt=""
        />
        <div className="box-title">
          <div className="title">
            <h4 > {images.Title} </h4>
          </div>
          <div className="year">
            <p>{images.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
