import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import TopNavbar from './navbar/TopNavbar'
import '../components/MovieContainer.scss'
import MovieDetails from './moviedetails/MovieDetails'
export default function MovieContainer() {
  return (
    <div className="main-container">
      <TopNavbar/>
      <div className="content-body">
        <Switch>
          <Route exact path='/movie-home' component={HomePage}/>
          <Route  path='/movie-home/:id/details' component={MovieDetails}/>
        </Switch>
      </div>
    </div>
  )
}
