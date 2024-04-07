import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import single from "./assets/single.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router-dom';

function Room() {

  const { hotelName } = useParams();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/hotels/${hotelName}/rooms`)
    .then(res => res.json())
    .then(data => setRooms(data))
    .catch(err => console.log(err))
  }, []);

  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [superficieFilter, setSuperficieFilter] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);
  const [showAllClicked, setShowAllClicked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (room) => {
    setSelectedRoom(room);
    setShow(true);
  };

  const handleEdit = async () => {
    try {
        const editedRoom = {
          prixparnuit: document.getElementById("formPrice").value,
          vue: document.getElementById("formVue").value,
          dommages: document.getElementById("formDommages").value,
          capacite: parseInt(document.getElementById("formCapacity").value),
          extphone: parseInt(document.getElementById("formExtPhone").value),
        };

        // Extract the room number from the URL or any other way you have it
        const roomNumber = selectedRoom.numerochambre; // Replace '123' with the actual room number
        
        // Send a PATCH request to update the room
        const response = await fetch(`/rooms/${roomNumber}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedRoom),
        });

        if (!response.ok) {
            throw new Error('Failed to update room');
        }

        // Handle successful update
        console.log('Room updated successfully');

        // Close the modal or perform any other actions as needed
        setShow(false);
    } catch (error) {
        console.error('Error updating room:', error.message);
        // Handle error - display an error message, etc.
        console.log('Error updating room:', error.message);
    }
};


  const reserve = () => {
    console.log("reserve");
  }

  const handleFilterClick = () => {
    setFilterClicked(true);
    setShowAllClicked(false);
  };

  const handleShowAllClick = () => {
    setShowAllClicked(true);
    setFilterClicked(false);
  };

  const filteredRooms = rooms.filter((room) => {
    if (showAllClicked) return true;
    console.log(parseInt(room.prixparnuit), parseInt(priceFilter) )
    if (filterClicked) {
      return (
        (superficieFilter === "" || room.superficie === parseInt(superficieFilter)) &&
        (capacityFilter === "" || room.capacite === parseInt(capacityFilter)) &&
        (priceFilter === "" || parseInt(room.prixparnuit) === parseInt(priceFilter))
      );
    }
    return true;
  });

  return (
    <>
      <Container style={{ padding: 0, margin: 0 }}>
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
                    value={superficieFilter}
                    onChange={(e) => setSuperficieFilter(e.target.value)}
                  />
                </div>
                <div>
                  <Form.Label>Capacity:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter capacity"
                    value={capacityFilter}
                    onChange={(e) => setCapacityFilter(e.target.value)}
                  />
                </div>
                <div>
                  <Form.Label>Price per night:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: "15%" }}>
                  <Button style={{marginRight: "5%"}} variant="primary" onClick={handleFilterClick}>
                    Filter
                  </Button>
                  <Button variant="secondary" onClick={handleShowAllClick}>
                    Show All
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "51.5rem" }}>
              <Card.Body>
                <hr />
                {filteredRooms.map((room) => (
                  <Card
                    key={room.numerochambre}
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
                                <span style={{fontWeight: "bold"}}>Room number </span>
                                <span>{room.numerochambre}</span>
                              </div>
                              <div>
                                <span style={{fontWeight: "bold"}}>Price per room: </span>
                                <span>{room.prixparnuit}</span>
                              </div>
                              <div>
                                <span style={{fontWeight: "bold"}}>Capacity: </span>
                                <span>{room.capacite}</span>
                              </div>
                              <div>
                                <span style={{fontWeight: "bold"}}>Superficie: </span>
                                <span>{room.superficie}</span>
                              </div>
                              <div >
                                <span style={{fontWeight: "bold"}} >phone extension: </span>
                                <span>{room.extphone}</span>
                              </div>
                              <div style={{ marginBottom: 10 }}>
                                <span style={{fontWeight: "bold"}} >Vue: </span>
                                <span>{room.vue}</span>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Room Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formPrice">
                <Form.Label>Price per room</Form.Label>
                <Form.Control type="text" placeholder="Enter new price per room" defaultValue={selectedRoom ? selectedRoom.prixparnuit : ""} />
              </Form.Group>
              <Form.Group controlId="formCapacity">
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter capacity" defaultValue={selectedRoom ? selectedRoom.capacite : ""} />
              </Form.Group>
              <Form.Group controlId="formExtPhone">
                <Form.Label>Phone extension</Form.Label>
                <Form.Control type="number" placeholder="Enter phone extension" defaultValue={selectedRoom ? selectedRoom.extphone : ""} />
              </Form.Group>
              <Form.Group controlId="formVue">
                <Form.Label>Vue</Form.Label>
                <Form.Control type="text" placeholder="Enter une vue" defaultValue={selectedRoom ? selectedRoom.vue : ""} />
              </Form.Group>
              <Form.Group controlId="formDommages">
                <Form.Label>Dommages</Form.Label>
                <Form.Control type="text" placeholder="Enter les dommages" defaultValue={selectedRoom ? selectedRoom.dommages : ""} />
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
