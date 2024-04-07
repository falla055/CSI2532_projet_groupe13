import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
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

function User() {
  // Sample profile data
  const [profile, setProfile] = useState({
    username: 'example_user',
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    bio: 'This is a sample bio.',
  });

  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    
    console.log('Saving changes:', profile);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <Card style={{ width: "70rem", height: "80rem", backgroundColor: "lightGrey" }} >
  
    <div>
      {editing ? (
        <div>
          <h2>Edit Profile</h2>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Bio:
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            />
          </label>
          <br />
          <Button variant = "Primary" onClick={handleSaveClick}>Save</Button>
        </div>
      ) : (
        <div>
          <h2>View Profile</h2>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>First Name:</strong> {profile.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.lastName}
          </p>
          <p>
            <strong>Age:</strong> {profile.age}
          </p>
          <p>
            <strong>Bio:</strong> {profile.bio}
          </p>
          <Button variant = "Primary" onClick={handleEditClick}>Edit</Button>
        </div>
      )}
    </div>
    </Card>
  );
}

export default User;

                
