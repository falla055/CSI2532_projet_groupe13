import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function User() {
  const [nas, setNAS] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the NAS value from localStorage
    const storedNAS = localStorage.getItem('NAS');
    if (storedNAS) {
      setNAS(storedNAS);
    }
  }, []);

  useEffect(() => {
    if (nas) {
      fetch(`http://localhost:5000/clients/${nas}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err));
    }
  }, [nas]);

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    streetNumber: '',
    streetName: '',
    city: '',
    postalCode: '',
  });

  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(!editing); // Toggle editing mode
    // Set initial values for editing fields
    if (!editing && user) {
      setProfile({
        firstName: user.prenom,
        lastName: user.nom,
        streetNumber: user.numrue,
        streetName: user.nomrue,
        city: user.ville,
        postalCode: user.cp,
      });
    }
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/clients/${nas}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prenom: profile.firstName,
          nom: profile.lastName,
          numrue: profile.streetNumber,
          nomrue: profile.streetName,
          ville: profile.city,
          cp: profile.postalCode,
        }),
      });
      const data = await response.json();
  
      // Show alert upon successful update
      window.alert("Profile updated successfully!");
  
      // Update the user state with the updated data
      setUser(data);
  
      // Exit editing mode
      setEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <Card style={{ width: "70rem", height: "80rem", backgroundColor: "lightGrey" }}>
      <div>
        {user ? (
          <>
            <h2>View Profile</h2>
            {editing ? (
              <>
                <label>First Name:
                  <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
                </label><br />
                <label>Last Name:
                  <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
                </label><br />
                <label>Street Number:
                  <input type="text" name="streetNumber" value={profile.streetNumber} onChange={handleChange} />
                </label><br />
                <label>Street Name:
                  <input type="text" name="streetName" value={profile.streetName} onChange={handleChange} />
                </label><br />
                <label>City:
                  <input type="text" name="city" value={profile.city} onChange={handleChange} />
                </label><br />
                <label>Postal Code:
                  <input type="text" name="postalCode" value={profile.postalCode} onChange={handleChange} />
                </label><br />
                <Button variant="primary" onClick={handleSaveClick}>Save</Button>
                <Button variant="danger" onClick={handleEditClick}>Cancel</Button> {/* Add Cancel button */}
              </>
            ) : (
              <>
                <p><strong>First Name:</strong> {user.prenom}</p>
                <p><strong>Last Name:</strong> {user.nom}</p>
                <p><strong>Street Number:</strong> {user.numrue}</p>
                <p><strong>Street Name:</strong> {user.nomrue}</p>
                <p><strong>City:</strong> {user.ville}</p>
                <p><strong>Postal Code:</strong> {user.cp}</p>
                <Button variant="primary" onClick={handleEditClick}>Edit</Button>
              </>
            )}

          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Card>
  );
}

export default User;
