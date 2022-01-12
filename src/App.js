import './App.css';
import Home from './LatTours/Home'
import CarouselMenu from './LatTours/CarouselMenu'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';

function App() {
  return (
    <Router> 
    <div className="App"> 

      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand> The Tour </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link> <Link to="/" style={{color:"white", textDecoration:"none"}}> Home  </Link>  </Nav.Link>
      </Nav>
      </Container> 
    </Navbar>

    <CarouselMenu /> 



     <div className="content"> 
      <Routes> 
      <Route path="/" element={<Home />} /> 
       </Routes>    
      </div>
      </div>
    </Router>
  );
}

export default App;
