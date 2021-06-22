import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Nav, Card, Col, Row, Form } from 'react-bootstrap'
import { gameActions } from "../../redux/actions";
import { Link } from 'react-router-dom'
import CarouselBox from "../../components/CarouselBox";

function HomePage() {

  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games)
  useEffect(() => {
    dispatch(gameActions.getAll());
  }, [dispatch]);

  const renderYearFilter = () => {
    return (
      <Form.Group className="mb-3" controlId="formStart">
        <Form.Label>Start</Form.Label>
        <Form.Control type="number" placeholder="2010" />
        <Form.Label>End</Form.Label>
        <Form.Control type="number" placeholder={new Date().getFullYear()} />
      </Form.Group>
    );
  }

  // ['Fighting', 'RPG', 'FPS']
  const [selectedGenres, setSelectedGenres] = useState([])

  const renderSidebar = () => {
    return (
      <Col lg="3" className="sidebar">
        <h1>Genre</h1>
        <Form>
          {["FPS", "RPG", "Fighting"].map((type) => (
            <div key={`default-radio ${type}`} className="mb-3">
              <Form.Check
                type={"radio"}
                id={`default-radio ${type}`}
                label={`${type}`}
              />
            </div>
          ))}
        </Form>
        <h1>Years</h1>
        {renderYearFilter()}
        <h1>Developer</h1>
        <Form>
          {["Blizzard", "Epic Games", "Riot Games", "Konami"].map((type) => (
            <div key={`default-radio ${type}`} className="mb-3">
              <Form.Check
                type={"radio"}
                id={`default-radio ${type}`}
                label={`${type}`}
              />
            </div>
          ))}
        </Form>
      </Col>
    );
  };

  return (
    <div>
      <Row>
        <CarouselBox />
      </Row>
      <Row>
        {renderSidebar()}
        <Col lg="9">
          <Row>
            {games?.map((m) => {
              return (
                <Col>
                  <Card className="m-3" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title
                        style={{
                          height: 50,
                        }}
                      >{m.title}</Card.Title>
                      <hr className="solid"></hr>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        {m.description}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Genre: {m.genre}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text>
                        Average vote: {m.avg_vote} from {m.votes} votes
                      </Card.Text>
                      <Card.Text
                        style={{
                          height: 120,
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        Developer: {m.developer}
                      </Card.Text>
                      <hr className="solid"></hr>
                      <Card.Text> Publisher: {m.publisher}</Card.Text>
                      <Nav.Link as={Link} to={`games/${m._id}`}>
                        View Detail
                      </Nav.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage
