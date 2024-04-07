import { useState, useEffect } from "react";
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
import { Link } from 'react-router-dom';
import "./index.css";



function Hotel() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hotels/")
    .then(res => res.json())
    .then(data => setHotels(data))
    .catch(err => console.log(err))
  }, []);

  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedChain, setSelectedChain] = useState("");



  const category = ["none",1, 2, 3,4, 5];
  const chain = ["none", "hotel", "devo", "mali", "casta", "wamba"];

  // Filter hotels based on selected criteria
  const filteredHotels = hotels.filter((hotel) => {
    return (
      (numberOfRooms === "" ||
        parseInt(hotel.nombrechambre) === parseInt(numberOfRooms)) &&
      ((selectedCategory === "" || selectedCategory === "none") || parseInt(selectedCategory) === parseInt(hotel.classification)) &&
      (selectedChain === "" || selectedChain === "none" || hotel.nomchaine === selectedChain)
    );
  });


  return (
    <>
      <Container style={{ width: "120%", marginLeft: "0", backgroundColor: "rgb(61, 61, 61)" }}>
        <Row style={{width: "100%", backgroundColor: ""}}>
          <Col xs={3} style={{ padding: 0, marginRight: "2%" }}>
            <Row style={{ marginBottom: "3rem" }}>
              <Col>
                <Card style={{width: "18rem"}}>
                <Card.Title>Filter</Card.Title>
                  <Card.Body style={{textAlign: "left"}}>
                    <p style={{marginBottom: "0"}}>Number of rooms</p>
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
                        style={{ border: "6px solid black" }}
                        variant="outline-secondary"
                        title={selectedCategory || "Select Category"}
                        id="category-dropdown"
                        
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
            <Card style={{ width: "51.5rem" }}>
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
                    <Col xs={6} key={hotel.nomhotel} style={{ marginBottom: "2rem" }}>
                      <Card
                        style={{
                          width: "22rem",
                          height: "100%",
                          padding: 0,
                          backgroundColor: "lightgrey",
                        }}
                      >
                        <Card.Img variant="top" src={single} />
                        <Card.Body>
                          <Card.Title>{hotel.nomhotel}</Card.Title>
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
                                <Row style={{marginBottom: "5%"}}>
                                  <Col xs={4} style={{ padding: 0 }}>
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Rating
                                    </div>
                                    <div style={{fontSize: "25px", textAlign: "left", color:"darkblue" }}>
                                      {hotel.classification}
                                    </div>
                                  </Col>
                                  <Col xs={8} style={{ paddingLeft: 60 }}>
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                      }}
                                    >
                                      Room Available
                                    </div>
                                    <div style={{fontSize: "25px", textAlign: "left", color: "darkblue"}}>
                                      {hotel.nombrechambre}
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={6} style={{ padding: 0 }}>
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {" "}
                                      Email
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                        color:  "darkblue",
                                      }}
                                    >
                                      {hotel.emailcontact}
                                    </div>
                                  </Col>
                                  <Col xs={5} style={{ paddingLeft: 7 }}>
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                      }}
                                    >
                                      {" "}
                                      Phone
                                    </div>
                                    <div
                                      style={{
                                        fontSize: "15px",
                                        textAlign: "left",
                                        color: "darkblue",
                                      }}
                                    >
                                      {hotel.phonecontact}
                                    </div>
                                  </Col>
                                </Row>
                              </Card.Subtitle>
                              <Card.Text></Card.Text>
                            </Card.Body>
                          </Card>
                          <a href={`/Room/${hotel.nomhotel}`}>
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
                          </a>
                        
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
