import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
      
        <Navbar.Brand href="#home">Walid Abbassi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Card className="text-center">
      <Card.Header>WELCOME</Card.Header>
      <Card.Body>
        <Card.Title>Hello, I'm WALID ABBASSI</Card.Title>
        <Card.Text>
        I'm a full-stack web developer.
        </Card.Text>
        <Button variant="primary">View my work</Button>
      </Card.Body>
      
    </Card>


    
    
    </div>
  );
}

export default App;
