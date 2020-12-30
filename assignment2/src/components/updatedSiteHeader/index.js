import React, {useContext} from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdatedSiteHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
        width="60"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/movies/upcoming">Upcoming</Nav.Link>
      <Nav.Link href="/movies/toprated">Top Rated</Nav.Link>
      <Nav.Link href="/movies/favorites">Favorites</Nav.Link>
      <Nav.Link href="/movies/watchlist">Watch List</Nav.Link>
      <Nav.Link href="/movies/search">Search</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
    <Form inline>
    <Navbar.Text> Welcome {context.userName} <Button variant="outline-light" id="search" onClick={() => context.signout()}>Sign Out</Button>  </Navbar.Text>
    </Form>
  </Navbar>
  ) : (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
        width="60"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/movies/upcoming">Upcoming</Nav.Link>
      <Nav.Link href="/movies/toprated">Top Rated</Nav.Link>
      <Nav.Link href="/movies/search">Search</Nav.Link>
    </Nav>
    <Form inline>
    <Navbar.Text> You are not logged in {" "} <Button variant="outline-light" id="search" onClick={() => history.push("/login")}>Login</Button> </Navbar.Text> 
    </Form>
  </Navbar>
  );
};

export default withRouter(UpdatedSiteHeader);