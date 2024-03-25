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
  return (
    <>
      <Container style={{ width: '100%', backgroundColor: 'rgb(61, 61, 61)' }}>
        <Row>
          <Col xs={3} style={{ padding: 0 }}>
            <Row style={{ marginBottom: "3rem" }}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Filter</Card.Title>
                    <p>Number of room</p>
                    <InputGroup>
                      <Image src="holder.js/171x180" roundedCircle />
                      <Form.Control aria-label="Text input with 2 dropdown buttons" />
                      <DropdownButton
                        variant="outline-secondary"
                        title=""
                        id="input-group-dropdown-4"
                        align="end"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                    <p>Category</p>
                    <InputGroup>
                      <Image src="holder.js/171x180" roundedCircle />
                      <Form.Control aria-label="Text input with 2 dropdown buttons" />
                      <DropdownButton
                        variant="outline-secondary"
                        title=""
                        id="input-group-dropdown-4"
                        align="end"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                    <p>Chain hoteliere</p>
                    <InputGroup>
                      <Image src="holder.js/171x180" roundedCircle />
                      <Form.Control aria-label="Text input with 2 dropdown buttons" />
                      <DropdownButton
                        variant="outline-secondary"
                        title=""
                        id="input-group-dropdown-4"
                        align="end"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
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
          <Col>
            <Card style={{ width: "100%" }}>
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
                  <Col style={{marginBottom: "2rem"}}>
                    <Card
                      style={{ width: "18rem", height: "100%", padding: 0, backgroundColor: "lightgrey"}}
                    >
                      <Card.Img variant="top" src={single} />
                      <Card.Body>
                        <Card.Title>Hotel</Card.Title>
                        <Card style={{ width: "100%", height:"8rem", backgroundColor:"darkgrey" }}>
                          <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">
                              Card Subtitle
                            </Card.Subtitle>
                            <Card.Text>
    
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        <Button style={{marginTop: "1rem", borderRadius: "2rem", width: "7rem", backgroundColor: "#24324b", border: '0.12rem solid white'  }} variant="primary">Select</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{ width: "18rem", height: "100%", padding: 0 }}
                    >
                      <Card.Img variant="top" src={single} />
                      <Card.Body>
                        <Card.Title>Hotel</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card
                      style={{ width: "18rem", height: "100%", padding: 0 }}
                    >
                      <Card.Img variant="top" src={single} />
                      <Card.Body>
                        <Card.Title>Hotel</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col>
                    <Card
                      style={{ width: "18rem", height: "100%", padding: 0 }}
                    >
                      <Card.Img variant="top" src={single} />
                      <Card.Body>
                        <Card.Title>Hotel</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hotel;
