import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBCheckbox,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";



// Create LocationCard component
const LocationCard = ({ location }) => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Location</Card.Title>
          <Card.Text>
            <div style={{ marginBottom: 20 }}>
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Numero Chambre: </span>
              <span style={{ marginLeft: 10 }}>{location.numchambre}</span>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Hotel Name: </span>
              <span style={{ marginLeft: 10 }}>{location.nomhotel}</span>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Start Date: </span>
              <div>{location.locationstart}</div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ textDecoration: "underline", fontWeight: "bold" }}>End Date: </span>
              <div>{location.locationend}</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// Create ReservationCard component
const ReservationCard = ({ reservation }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nas, setNAS] = useState('');

  useEffect(() => {
    // Retrieve the NAS value from localStorage
    const storedNAS = localStorage.getItem('NAS');
    if (storedNAS) {
      setNAS(storedNAS);
    }
  }, []);

  const handleConfirm = async () => {
    console.log(document.getElementById('form6').value)
    try {
      // Update reservation status to "archived"
      const response = await fetch(`http://localhost:5000/reservations/${reservation.resid}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'archived' }), // Set status to "archived"
      });

      if (!response.ok) {
        throw new Error('Failed to update reservation status');
      }

      // Get the value entered in the "Card number" input field
      const cardNumber = document.getElementById('form6').value;

      // Create location
      const newLocation = {
        nasclient: reservation.nasclient, // Example value, replace with appropriate value
        nasemploye: nas, // Example value, replace with appropriate value
        numchambre: reservation.numerochambre,
        locationstart: reservation.resstart,
        locationend: reservation.resend,
        nomhotel: reservation.nomhotel,
        paymentid: cardNumber, // Set paymentid to the value entered in the input field
        status: "active", // Set location status to "active"
      };

      const locationResponse = await fetch(`http://localhost:5000/locations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocation),
      });

      if (!locationResponse.ok) {
        throw new Error('Failed to create location');
      }

      // Close modal
      setShow(false);

      // Reload reservations and locations data
      // You may need to update this part based on your application logic
      // For example, you can reload data only if the updates were successful
      // or handle errors differently
      window.location.reload();
    } catch (error) {
      console.error('Error updating reservation status and creating location:', error.message);
    }
  };



  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Reservation</Card.Title>
            <Card.Text>
              <div style={{ marginBottom: 20 }}>
                <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Numero Chambre: </span>
                <span style={{ marginLeft: 10 }}>{reservation.numerochambre}</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Hotel Name: </span>
                <span style={{ marginLeft: 10 }}>{reservation.nomhotel}</span>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Start Date: </span>
                <div>{reservation.resstart}</div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <span style={{ textDecoration: "underline", fontWeight: "bold" }}>End Date: </span>
                <div>{reservation.resend}</div>
              </div>
            </Card.Text>
            <Button variant="primary" style={{ display: reservation.status === "active" ? "block" : "none" }} onClick={handleShow}>Transform to location</Button>
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
                        <h5 className="mb-0">Billing details</h5>
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
                              label="Card number"
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
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>
    </>
  );
};

// Reservation component

function Reservation() {
  const [allReservation, setAllReservation] = useState([]);
  const [segment, setSegment] = useState("current");
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/locations")
      .then(res => res.json())
      .then(data => setAllLocations(data))
      .catch(err => console.log(err));
  }, []); // Added empty dependency array

  useEffect(() => {
    fetch("http://localhost:5000/reservations")
      .then(res => res.json())
      .then(data => setAllReservation(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Card style={{ width: "70rem", height: "80rem", backgroundColor: "lightGrey" }}>
      <div className="button-container">
        <Button style={{ marginRight: "3rem" }} onClick={() => setSegment("current")} variant="primary">Current Reservations</Button>
        <Button style={{ marginRight: "3rem" }} onClick={() => setSegment("archived")} variant="primary">Archived Reservations</Button>
        <Button style={{ marginRight: "3rem" }} onClick={() => setSegment("activeLocations")} variant="primary">Active Locations</Button>
        <Button style={{ marginRight: "3rem" }} onClick={() => setSegment("archivedLocations")} variant="primary">Archived Locations</Button>
      </div>
      <Card.Body>
        <Card.Title>Reservations / Locations</Card.Title>
        <Card.Text style={{ display: "flex", flexWrap: "wrap" }}>
          {segment === "current" || segment === "archived"
            ? allReservation.map((reservation) => {
              if (
                (segment === "current" && reservation.status === "archived") ||
                (segment === "archived" && reservation.status === "active")
              ) {
                return null;
              }
              return (
                <div key={reservation.resid} style={{ marginRight: "10px" }}>
                  <ReservationCard reservation={reservation} />
                </div>
              );
            })
            : segment === "activeLocations" || segment === "archivedLocations"
              ? allLocations.map((location) => {
                if (
                  (segment === "activeLocations" && location.status === "archived") ||
                  (segment === "archivedLocations" && location.status === "active")
                ) {
                  return null;
                }
                return (
                  <div key={location.locationid} style={{ marginRight: "10px" }}>
                    <LocationCard location={location} />
                  </div>
                );
              })
              : null}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default Reservation;
