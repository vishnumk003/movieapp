import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ImageViewer from '../imageviewer/ImageViewer'
import '../moviedetails/MovieDetails.scss'
export default function MovieDetails(props) {


  const [movieDetails, setMovieDetails] = useState({})

  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovieDetails()
  }, [])


 const getMovieDetails = async () =>{
    try {
      const result = await  axios.get(`https://www.omdbapi.com/?apikey=e957b0d3&i=${props.match.params.id}&plot=full`)
      setMovieDetails(result.data)
      const movies = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=e957b0d3&s=game%27&page=2')
      setMovies(movies.data.Search)
    } 
    catch (error) {
      
    }
 }

  

 
  return (
    <div className="movie-details-container">
      <div className="container">
        <div className="details-box">
          <div className="image">
            <img style={{width:'100%',height:'400px'}} src={movieDetails.Poster} alt=""/>
          </div>
          <div className="details">
            <div className="movie-info">
              <div className="info info-1"> 
                <h2>{movieDetails.Title}</h2>
                <p><span>{movieDetails.Runtime}</span> . <span>{movieDetails.Year}</span> . <span>{movieDetails.Genre}</span></p>
                <p><span>{movieDetails.imdbRating}/10</span> Imdb</p>
              </div>
              <div className="info info-2"> 
                <p>Written By : <span>{movieDetails.Writer}</span></p>

                <p>Language : <span>{movieDetails.Language}</span> </p>
                <p>Meta Score : <span>{movieDetails.Metascore}</span></p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <div className="images">
          {
            movies.map((list,index)=>(
            <div className="image-grid">
              <ImageViewer
                images={list}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
