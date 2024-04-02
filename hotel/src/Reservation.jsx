import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBRadio,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

function Reservation() {
  const [segment, setSegment] = useState("current");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card
      style={{ width: "70rem", height: "80rem", backgroundColor: "lightGrey" }}
    >
      <div className="button-container">
        <Button
          style={{ marginRight: "3rem" }}
          onClick={() => setSegment("current")}
          variant="primary"
        >
          Current Reservations
        </Button>
        <Button
          style={{ marginRight: "3rem" }}
          onClick={() => setSegment("ArchievedR")}
          variant="primary"
        >
          Archieved Reservations
        </Button>
        <Button
          style={{ marginRight: "3rem" }}
          onClick={() => setSegment("currentLocation")}
          variant="primary"
        >
          Active Locations
        </Button>
        <Button
          style={{ marginRight: "3rem" }}
          onClick={() => setSegment("ArchievedLocation")}
          variant="primary"
        >
          Archieved Locations
        </Button>
      </div>
      <Card.Body>
        <Card.Title>Reservations / Locations</Card.Title>
        <Card.Text>
          <div
            style={{
              marginTop: "3rem",
              display: segment === "current" ? "block" : "none",
            }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Rervation</Card.Title>
                <Card.Text>
                  <div style={{ marginBottom: 20 }}>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Room Number:{" "}
                    </span>
                    <span style={{ marginLeft: 10 }}> 3</span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Status:{" "}
                    </span>
                    <span style={{ marginLeft: 10 }}>In progress</span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      Reservation Date:{" "}
                    </span>
                    <div>2023-01-23 - 2023-03-23</div>
                  </div>
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                  Transform to location
                </Button>
              </Card.Body>
              <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                  <Modal.Title>Reservation -> Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MDBContainer className="py-5">
                    <MDBRow>
                      <MDBCol md="8" className="mb-4">
                        <MDBCard className="mb-4">
                          <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Biling details</h5>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBRow className="mb-4">
                              <MDBCol>
                                <MDBInput
                                  label="First name"
                                  id="form1"
                                  type="text"
                                />
                              </MDBCol>

                              <MDBCol>
                                <MDBInput
                                  label="Last name"
                                  id="form2"
                                  type="text"
                                />
                              </MDBCol>
                            </MDBRow>

                            <MDBInput
                              wrapperClass="mb-4"
                              label="Address"
                              id="form3"
                              type="text"
                            />
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Email"
                              id="form4"
                              type="email"
                            />
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Phone"
                              id="form5"
                              type="number"
                            />

                            <hr className="my-4" />

                            <MDBCheckbox
                              name="flexCheck"
                              value=""
                              id="checkoutForm1"
                              label="Shipping address is the same as my billing address"
                            />
                            <MDBCheckbox
                              name="flexCheck"
                              value=""
                              id="checkoutForm2"
                              label=" Save this information for next time"
                              defaultChecked
                            />

                            <hr className="my-4" />

                            <h5 className="mb-4">Payment</h5>

                            <MDBRadio
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              label="Credit card"
                              checked
                            />

                            <MDBRadio
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              label="Debit card"
                            />

                            <MDBRadio
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              label="Paypal"
                              wrapperClass="mb-4"
                            />

                            <MDBRow>
                              <MDBCol>
                                <MDBInput
                                  label="Name on card"
                                  id="form6"
                                  type="text"
                                  wrapperClass="mb-4"
                                />
                              </MDBCol>
                              <MDBCol>
                                <MDBInput
                                  label="Name on card"
                                  id="form7"
                                  type="text"
                                  wrapperClass="mb-4"
                                />
                              </MDBCol>
                            </MDBRow>

                            <MDBRow>
                              <MDBCol md="3">
                                <MDBInput
                                  label="Expiration"
                                  id="form8"
                                  type="text"
                                  wrapperClass="mb-4"
                                />
                              </MDBCol>
                              <MDBCol md="3">
                                <MDBInput
                                  label="CVV"
                                  id="form8"
                                  type="text"
                                  wrapperClass="mb-4"
                                />
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>

                      <MDBCol md="4" className="mb-4">
                        <MDBCard className="mb-4">
                          <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Summary</h5>
                          </MDBCardHeader>
                          <MDBCardBody>
                            <MDBListGroup flush>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Products
                                <span>$53.98</span>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Shipping
                                <span>Gratis</span>
                              </MDBListGroupItem>
                              <hr className="my-2"></hr>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                <div>
                                  <strong>Total amount</strong>
                                  <strong>
                                    <p className="mb-0">(including VAT)</p>
                                  </strong>
                                </div>
                                <span>
                                  <strong>$53.98</strong>
                                </span>
                              </MDBListGroupItem>
                            </MDBListGroup>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Confirm
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card>
          </div>

          <div></div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Reservation;
