import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import single from "./assets/single.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

function Room() {
  const [show, setShow] = useState(false);
  const [superficieFilter, setSuperficieFilter] = useState(null);
  const [capacityFilter, setCapacityFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rooms = [
    {
      id: 1,
      price: 500,
      capacity: 5,
      superficie: 400,
      availableDates: "2023-01-23",
    },
    {
      id: 2,
      price: 600,
      capacity: 6,
      superficie: 500,
      availableDates: "2023-01-24",
    },
    {
      id: 3,
      price: 700,
      capacity: 7,
      superficie: 600,
      availableDates: "2023-01-25",
    },
    {
      id: 4,
      price: 800,
      capacity: 8,
      superficie: 700,
      availableDates: "2023-01-26",
    },
  ];

  // Apply filters to rooms
  const filteredRooms = rooms.filter(room => {
    if (superficieFilter && room.superficie < superficieFilter) return false;
    if (capacityFilter && room.capacity < capacityFilter) return false;
    if (priceFilter && room.price > priceFilter) return false;
    return true;
  });

  return (
    <>
      <Container style={{ padding: 0, margin: 0 }}>
        {/* Filter section */}
        <Row>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <Card.Title>Filters</Card.Title>
                <div>
                  <Form.Label>Superficie:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter superficie"
                    value={superficieFilter || ""}
                    onChange={(e) => setSuperficieFilter(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Form.Label>Capacity:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter capacity"
                    value={capacityFilter || ""}
                    onChange={(e) => setCapacityFilter(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={priceFilter || ""}
                    onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Room display */}
        <Row>
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <hr />
                {filteredRooms.map((room) => (
                  <Card
                    key={room.id}
                    style={{
                      width: "46rem",
                      height: "100%",
                      padding: 0,
                      marginBottom: 20,
                    }}
                  >
                    <Container>
                      <Row>
                        <Col>
                          <Card.Img
                            style={{
                              marginLeft: "-8.4rem",
                              width: "17rem",
                            }}
                            variant="top"
                            src={single}
                          />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Text>
                              <div>
                                <span>Price: </span>
                                <span>{room.price}</span>
                              </div>
                              <div>
                                <span>Capacity: </span>
                                <span>{room.capacity}</span>
                              </div>
                              <div>
                                <span>Superficie: </span>
                                <span> {room.superficie} </span>
                              </div>
                              <div style={{ marginBottom: 10 }}>
                                <span>Available Dates: </span>
                                <span> {room.availableDates} </span>
                              </div>
                              <Button
                                style={{
                                  borderRadius: "2rem",
                                  width: "10rem",
                                  backgroundColor: "#24324b",
                                  border: "0.12rem solid white",
                                  marginRight: 40,
                                }}
                                variant="primary"
                                onClick={handleShow}
                              >
                                View Dommages
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "2rem",
                                  width: "7rem",
                                  backgroundColor: "#24324b",
                                  border: "0.12rem solid white",
                                }}
                                variant="primary"
                              >
                                Reserve
                              </Button>
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Container>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dommages</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you are reading this text in a modal!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Room;
