import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import single from "./assets/single.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image';
import './index.css';

function Room() {
  return (
    <>
      <Container style={{ padding: 0, margin: 0 }}>
        <Row>
          <Col xs={3} style={{ padding: 0 }}>
            <Row style={{marginBottom: "3rem"}}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <p>Superficie</p>
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
                    <p>Departure Date</p>
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
                    <p>Arival Date</p>
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
                    <Card.Text>
                     
                    </Card.Text>

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
                    <Card.Title>Sort By: </Card.Title>
                  </Col>
                  <Col>
                    <DropdownButton id="dropdown-basic-button" title="Price">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col>
                    <DropdownButton id="dropdown-basic-button" title="Capacity">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </Container>
              <Card.Body>
                <hr />

                <Card style={{ width: "100%", height: "100%", padding: 0 }}>
                  <Container>
                    <Row>
                      <Col>
                        <Card.Img
                          style={{ marginLeft: "-8.4rem", width: "17rem" }}
                          variant="top"
                          src={single}
                        />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>

                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Room;
