import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { users } from "./data";
import Home from "./pages/Home";
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
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">hello from footer </div>
      </footer>
    </div>
  );
}

export default App;
