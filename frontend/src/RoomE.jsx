import React, { useState, useEffect } from 'react';
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

function RoomE() {
  const { hotelName } = useParams();
  const [rooms, setRooms] = useState([]);
  const [reservationStart, setReservationStart] = useState("");
  const [reservationEnd, setReservationEnd] = useState("");
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [nas, setNAS] = useState('');
  const [employeeInfo, setEmployeeInfo] = useState(null);

  useEffect(() => {
    // Retrieve the NAS value from localStorage
    const storedNAS = localStorage.getItem('NAS');
    if (storedNAS) {
      setNAS(storedNAS);
    }
  }, []);

  useEffect(() => {
    if (nas) {
      fetch(`http://localhost:5000/employees/${nas}`)
        .then(res => res.json())
        .then(data => {
          setEmployeeInfo(data);
          // Fetch rooms based on the employee's hotel
          fetch(`http://localhost:5000/hotels/${data.nomhotel}/rooms`)
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
    }
  }, [nas]);

  const [show, setShow] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
        superficie: parseInt(document.getElementById("formSuperficie").value),
        nomhotel: hotelName
      };

      const roomNumber = selectedRoom ? selectedRoom.numerochambre : null;

      const response = await fetch(`http://localhost:5000/rooms/${roomNumber}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedRoom),
      });

      if (!response.ok) {
        throw new Error('Failed to update room');
      }

      console.log('Room updated successfully');

      setShow(false);
    } catch (error) {
      console.error('Error updating room:', error.message);
    }
  };

  return (
    <>
      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col>
            <Card style={{ width: "70.5rem" }}>
              <Card.Body>
                <hr />
                {rooms.map((room) => (
                  <Card
                    key={room.numerochambre}
                    style={{
                      width: "64rem",
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
                              marginLeft: "-5.4rem",
                              width: "30rem",
                            }}
                            variant="top"
                            src={single}
                          />
                        </Col>
                        <Col>
                          <Card.Body>
                            <Card.Text>
                              <div>
                                <span style={{ fontWeight: "bold" }}>Room number </span>
                                <span>{room.numerochambre}</span>
                              </div>
                              <div>
                                <span style={{ fontWeight: "bold" }}>Price per room: </span>
                                <span>{room.prixparnuit}</span>
                              </div>
                              <div>
                                <span style={{ fontWeight: "bold" }}>Capacity: </span>
                                <span>{room.capacite}</span>
                              </div>
                              <div>
                                <span style={{ fontWeight: "bold" }}>Superficie: </span>
                                <span>{room.superficie}</span>
                              </div>
                              <div >
                                <span style={{ fontWeight: "bold" }}>phone extension: </span>
                                <span>{room.extphone}</span>
                              </div>
                              <div >
                                <span style={{ fontWeight: "bold" }}>Superficie: </span>
                                <span>{room.superficie}</span>
                              </div>
                              <div style={{ marginBottom: 10 }}>
                                <span style={{ fontWeight: "bold" }}>Vue: </span>
                                <span>{room.vue}</span>
                              </div>
                              <div style={{ marginBottom: 10 }}>
                                <span style={{ fontWeight: "bold" }}>Dommages: </span>
                                <span>{room.dommages}</span>
                              </div>

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
              <Form.Group controlId="formSuperficie">
                <Form.Label>Superficie</Form.Label>
                <Form.Control type="number" placeholder="Enter phone extension" defaultValue={selectedRoom ? selectedRoom.superficie : ""} />
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

export default RoomE;
