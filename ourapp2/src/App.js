import logo from './logo.svg';
import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert'
import Pagination from 'react-bootstrap/Pagination';
import { NavDropdown } from 'react-bootstrap';
import Movies from "./components/items/items";
import './App.css';

function App() {
  return (
    <body>
    <div className="container-fluid">
      <Carousel className="Carousel">
        <Carousel.Item>
          <div id='div1'>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div id='div2'></div>
        </Carousel.Item>
        <Carousel.Item>
        <div id='div3'></div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className='container-fluid bg-success pt-0 shadow'>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className='text-dark ' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className='text-dark' eventKey="link-1">Ratings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-dark' eventKey="link-2" href='https://www.imdb.com/chart/top/?ref_=nv_mv_250'>Top Movies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-dark' eventKey="link-3" href=''>
            <NavDropdown className='navdrop-dark p-0' title={
              <span className="text-dark">Categories</span> } menuVariant="light">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
            </NavDropdown>
          </Nav.Link>
        </Nav.Item> 
      </Nav>
      </div>
      <div className='container-fluid'>
          <Movies/>
      </div>
    </body>
  );
}

export default App;
