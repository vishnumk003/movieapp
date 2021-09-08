import React from 'react'
import '../../components/navbar/TopNavbar.scss'
import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNavbar() {
  return (
    <div id="top-nav">
      <Navbar expand="lg" fixedTop>
        <Container>
          <Link to='movie-home'>
            <Navbar.Brand > Movie Hub</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               <Link to="/">Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i></Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

