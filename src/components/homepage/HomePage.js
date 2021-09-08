import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWidget from '../sliderwidget/SliderWidget'
import ImageViewer from '../imageviewer/ImageViewer';
import data from '../../data'
import '../homepage/HomePage.scss'
import axios from 'axios';
import { Col, Form, Row ,Button} from 'react-bootstrap';
// import { Button } from 'bootstrap';


export default function HomePage() {

  const [movies, setMovies] = useState([])
  const [movieFilteredData, setMovieFilteredData] = useState([])
  const [filterParams, setFilterParams] = useState({})

 useEffect(() => {
   getMovies()
 }, [])

 const getMovies = async () =>{
    try {
      const result = await axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=e957b0d3&s=game%27&page=2')
      setMovies(result.data.Search)
      setMovieFilteredData(result.data.Search)
    } 
    catch (error) {
      
    }
 }

 const onHandleInputChange = (field,value) =>{

   setFilterParams({...filterParams,[field]:value})

 }

 const onHandleMovieFilter = async (event) =>{
  if (event) {
    event.preventDefault();
  }
   const result = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=e957b0d3&t=${filterParams.title}&y=${filterParams.year}`)
   setMovies([result.data])

 }
  
  return (
    <Container>
      <SliderWidget
        sliderData={movies}
      />
      <div className="image-grid-main-container">
        <div className="filter-header">
          <div className="filter-box">
            <Form>
              <Row>
                <Col xs={7}>
                  <Form.Control placeholder="title" onChange={(e)=>onHandleInputChange('title',e.target.value)} />
                </Col>
                <Col>
                  <Form.Control placeholder="year" onChange={(e)=>onHandleInputChange('year',e.target.value)}  />
                </Col>
                <Col>
                  <Button variant="primary" 
                    onClick={(e)=>onHandleMovieFilter(e)}
                    type="submit"
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <h3>Latest & Trending</h3>
        <div className="image">
          {
            movieFilteredData.map((list,index)=>(
            <div className="image-grid">
              <ImageViewer
                images={list}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.main`
  padding:50px;

`





