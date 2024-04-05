import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import single from "./assets/single.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Room() {
  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [superficieFilter, setSuperficieFilter] = useState(null);
  const [capacityFilter, setCapacityFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (room) => {
    setSelectedRoom(room);
    setShow(true);
  };

  const handleEdit = () => {
    // Collect the modified data from the form fields
    const editedRoom = {
      id: selectedRoom.id,
      price: parseInt(document.getElementById("formPrice").value),
      capacity: parseInt(document.getElementById("formCapacity").value),
      superficie: parseInt(document.getElementById("formSuperficie").value),
      availableDates: document.getElementById("formAvailableDates").value,
    };
  
    // Perform any action with the edited room data, e.g., update state
    console.log("Edited Room:", editedRoom);
  
    // Close the modal after editing
    setShow(false);
  };
  

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
  const filteredRooms = rooms.filter((room) => {
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
            <Card style={{ width: "18rem" }}>
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
          <Col>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <hr />
                {filteredRooms.map((room) => (
                  <Card
                    key={room.id}
                    style={{
                      width: "44rem",
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
                                <span>{room.superficie}</span>
                              </div>
                              <div style={{ marginBottom: 10 }}>
                                <span>Available Dates: </span>
                                <span>{room.availableDates}</span>
                              </div>
                              <Button
                                style={{
                                  borderRadius: "2rem",
                                  width: "10rem",
                                  backgroundColor: "#24324b",
                                  border: "0.12rem solid white",
                                  marginRight: 20,
                                }}
                                variant="primary"
                                onClick={() => handleShow(room)}
                              >
                                View Dommages
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "2rem",
                                  width: "7rem",
                                  backgroundColor: "#24324b",
                                  border: "0.12rem solid white",
                                  marginRight: 20,
                                }}
                                variant="primary"
                                onClick={() => handleShow(room)}
                              >
                                Reserve
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "2rem",
                                  width: "7rem",
                                  backgroundColor: "#24324b",
                                  border: "0.12rem solid white",
                                }}
                                variant="primary"
                                onClick={() => handleShow(room)}
                              >
                                Edit
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
        {/* Modal for editing room information */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Room Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" defaultValue={selectedRoom ? selectedRoom.price : ""} />
              </Form.Group>
              <Form.Group controlId="formCapacity">
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter capacity" defaultValue={selectedRoom ? selectedRoom.capacity : ""} />
              </Form.Group>
              <Form.Group controlId="formSuperficie">
                <Form.Label>Superficie</Form.Label>
                <Form.Control type="number" placeholder="Enter superficie" defaultValue={selectedRoom ? selectedRoom.superficie : ""} />
              </Form.Group>
              <Form.Group controlId="formAvailableDates">
                <Form.Label>Available Dates</Form.Label>
                <Form.Control type="text" placeholder="Enter available dates" defaultValue={selectedRoom ? selectedRoom.availableDates : ""} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Room;
