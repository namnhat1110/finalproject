import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Container, Jumbotron, Row, Col, Button } from 'react-bootstrap'
import { gameActions } from "../../redux/actions";
import CarouselBox from "../../components/CarouselBox";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import './style.css'


function GameDetailPage() {

  const dispatch = useDispatch();
  const { id } = useParams()
  const game = useSelector((state) => state.game.games)
  useEffect(() => {
    dispatch(gameActions.getSingleGame(id));
  }, [dispatch]);

  // Add random

  return (
    <div className="detail-page">
      <Container className="main-info my-5">
        <h1>{game.title}</h1>

        <Row className="main-info">
          <Col sm={8}>
            <YoutubeEmbed />
          </Col>
          <Col sm={4} className="px-5">
            <Row><p>{game.snippet}</p></Row>
            <Row><p>{game.original_price}</p></Row>
            <Row><p> {game.discount_price}</p></Row>
            <Row><p>{game.price}</p></Row>
            <Row>
              <Button> Buy Now</Button>
            </Row>
            <Row className="mt-2">
              <Button> Add to wishlist</Button>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row>
          <Col sm>
            <Row><p>Developer</p></Row>
            <Row><p>{game.developer}</p></Row>
          </Col>
          <Col sm>
            <Row><p>Publisher</p></Row>
            <Row><p>{game.publisher}</p></Row>
          </Col>
          <Col sm>
            <Row><p>Release Date</p></Row>
            <Row><p>{game.release_date}</p></Row>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Row><p>Genre</p></Row>
            <Row><p>{game.genre}</p></Row>
          </Col>
          <Col sm>
            <Row><p>Tag</p></Row>
            <Row><p>{game.details}</p></Row>
          </Col>
          <Col sm>
          </Col>
        </Row>
      </Container>

      <Container className=" carousel my-5">
        <CarouselBox />
      </Container>

      <Container className="my-5">
        {game.description}
      </Container>

      <Container>
        <Row>
          <h5>Specifiations</h5>
        </Row>
        <Row>
          <Col sm>
            {game.minimum_requirements}
          </Col>
          <Col sm>
            {game.recommended_requirements}
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default GameDetailPage;
