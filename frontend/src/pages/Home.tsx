import React from "react";
import { users } from "../data";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Row>
      {users.map((person) => (
        <Col key={person.id} sm={6} md={4} lg={3}>
          <Link to={`/user/${person.id}`}>
            <img src={person.image} alt={person.image} className="person-img" />
            <h4>{person.email} </h4>
            <p>{person.firstName} </p>
            <p>{person.lastName} </p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
