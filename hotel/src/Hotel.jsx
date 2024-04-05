import { useState } from "react";
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
import "./index.css";

function Hotel() {
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedChain, setSelectedChain] = useState("");

  const hotels = [
    {
      id: 1,
      name: "Hotel 1",
      rooms: 50,
      category: "test",
      chain: "hotel",
      image: single, // Assuming single is the image for Hotel 1
      email: "hotel1@gmail.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Hotel 2",
      rooms: 30,
      category: "development",
      chain: "devo",
      image: single, // Assuming single is the image for Hotel 2
      email: "hotel2@gmail.com",
      phone: "456-789-0123",
    },
    {
      id: 3,
      name: "Hotel 3",
      rooms: 30,
      category: "development",
      chain: "devo",
      image: single, // Assuming single is the image for Hotel 2
      email: "hotel2@gmail.com",
      phone: "456-789-0123",
    },
    // Add more hotels as needed
  ];

  const category = ["test", "production", "development", "release"];
  const chain = ["hotel", "devo", "mali", "casta", "wamba"];

  // Filter hotels based on selected criteria
  const filteredHotels = hotels.filter((hotel) => {
    console.log(selectedCategory, selectedChain, "34");
    return (
      (numberOfRooms === "" ||
        parseInt(hotel.rooms) === parseInt(numberOfRooms)) &&
      (selectedCategory === "" || hotel.category === selectedCategory) &&
      (selectedChain === "" || hotel.chain === selectedChain)
    );
  });

  return (
    <>
      <Container style={{ width: "120%", marginLeft: "-8%", backgroundColor: "rgb(61, 61, 61)" }}>
        <Row style={{width: "100%", backgroundColor: ""}}>
          <Col xs={3} style={{ padding: 0, marginRight: "2%" }}>
            <Row style={{ marginBottom: "3rem" }}>
              <Col>
                <Card style={{width: "18rem"}}>
                  <Card.Body>
                    <Card.Title>Filter</Card.Title>
                    <p>Number of rooms</p>
                    <InputGroup>
                      <Form.Control
                        aria-label="Text input with 2 dropdown buttons"
                        value={numberOfRooms}
                        onChange={(e) => setNumberOfRooms(e.target.value)}
                      />
                    </InputGroup>
                    <p style={{marginTop: 20, marginBottom:0}} >Category</p>
                    <InputGroup>
                      <DropdownButton
                        variant="outline-secondary"
                        title={selectedCategory || "Select Category"}
                        id="category-dropdown"
                        align="end"
                      >
                        {category.map((cat) => (
                          <Dropdown.Item
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                          >
                            {cat}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </InputGroup>
                    <p style={{marginTop: 20, marginBottom:0}}>Chain hotelier</p>
                    <InputGroup>
                      <DropdownButton
                        variant="outline-secondary"
                        title={selectedChain || "Select Chain"}
                        id="chain-dropdown"
                        align="center"
                      >
                        {chain.map((ch) => (
                          <Dropdown.Item
                            key={ch}
                            onClick={() => setSelectedChain(ch)}
                          >
                            {ch}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Hotel Info</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={8}>
            <Card style={{ width: "63rem" }}>
              <Container>
                <Row>
                  <Col>
                    <Card.Title>Hotel </Card.Title>
                  </Col>
                </Row>
              </Container>
              <Card.Body>
                <hr />
                <Row>
                  {filteredHotels.map((hotel) => (
                    <Col xs={4} key={hotel.id} style={{ marginBottom: "2rem" }}>
                      <Card
                        style={{
                          width: "18rem",
                          height: "100%",
                          padding: 0,
                          backgroundColor: "lightgrey",
                        }}
                      >
                        <Card.Img variant="top" src={hotel.image} />
                        <Card.Body>
                          <Card.Title>{hotel.name}</Card.Title>
                          <Card
                            style={{
                              width: "100%",
                              height: "8rem",
                              backgroundColor: "darkgrey",
                              paddingLeft: 20,
                              paddingRight: 0,
                            }}
                          >
                            <Card.Body style={{ margin: 0, padding: 0 }}>
                              <Card.Subtitle className="mb-2 text-muted">
                                <Row>
                                  <Col xs={4} style={{ padding: 0 }}>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Very Good
                                    </p>
                                  </Col>
                                  <Col xs={8} style={{ paddingLeft: 60 }}>
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Room Available
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={6} style={{ padding: 0 }}>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {" "}
                                      Email
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "10px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {hotel.email}
                                    </div>
                                  </Col>
                                  <Col xs={5} style={{ paddingLeft: 18 }}>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {" "}
                                      Phone
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "10px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {hotel.phone}
                                    </div>
                                  </Col>
                                </Row>
                              </Card.Subtitle>
                              <Card.Text></Card.Text>
                            </Card.Body>
                          </Card>
                          <Button
                            style={{
                              marginTop: "1rem",
                              borderRadius: "2rem",
                              width: "7rem",
                              backgroundColor: "#24324b",
                              border: "0.12rem solid white",
                            }}
                            variant="primary"
                          >
                            Select
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hotel;
