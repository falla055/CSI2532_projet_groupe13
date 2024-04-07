import React, { useState } from "react";
import Card from "react-bootstrap/Card"; // Import Card component from react-bootstrap

function Register() {
  const [formData, setFormData] = useState({
    nas: "",
    prenom: "",
    nom: "",
    numRue: "",
    nomRue: "",
    ville: "",
    cp: "",
    registerDate: new Date().toISOString().slice(0, 10),
  });

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      localStorage.setItem("NAS", data.nas);

      // Show alert upon successful registration
      window.alert("Successfully registered!");

      // Redirect logic can be added here upon successful registration
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  const handleLogin = () => {
    const enteredNAS = prompt("Please enter your NAS:");
    if (enteredNAS) {
      localStorage.setItem("NAS", enteredNAS);
      window.alert("Login completed!");
    }
  };

  return (
    <>
      <Card style={{ width: "70rem" }}>
        {/* Set width of the card */}
        <Card.Header>Register</Card.Header>
        <Card.Body>
          <form onSubmit={handleRegisterSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Add flex styles for vertical spacing */}
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="nas"
                placeholder="NAS"
                value={formData.nas}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="prenom"
                placeholder="First Name"
                value={formData.prenom}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="nom"
                placeholder="Last Name"
                value={formData.nom}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="numRue"
                placeholder="Street Number"
                value={formData.numRue}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="nomRue"
                placeholder="Street Name"
                value={formData.nomRue}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="ville"
                placeholder="City"
                value={formData.ville}
                onChange={handleRegisterChange}
                required
              />
              <input
                style={{ marginBottom: "1%" }}
                type="text"
                name="cp"
                placeholder="Postal Code"
                value={formData.cp}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button style={{ marginTop: "2%" }} type="submit">
              Register
            </button>
          </form>
          <button style={{ marginTop: "2%" }} onClick={handleLogin}>
            Click to Login
          </button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Register;
