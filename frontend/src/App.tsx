import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { users } from "./data";
import { Person } from "./types/Person";

function App() {
  return (
    <div className="d-flex flex-column vh-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>ts-project</Navbar.Brand>
            <Nav className="d-flex flex-row">
              <a href="#" className="nav-link p-2">
                About
              </a>
              <a href="#" className="nav-link p-2">
                Contact
              </a>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {users.map((person) => (
              <Col key={person.id} sm={6} md={4} lg={3}>
                <img
                  src={person.image}
                  alt={person.image}
                  className="person-img"
                />
                <h4>{person.email} </h4>
                <p>{person.firstName} </p>
                <p>{person.lastName} </p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">hello from footer </div>
      </footer>
    </div>
  );
}

export default App;
