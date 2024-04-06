const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//ROUTES

//CREATE RESERVATION *working*
app.post("/reservations", async (req, res) => {
    try {
        const { status, resStart, resEnd, nasclient, numeroChambre, nomHotel } = req.body;
        const newReservation = await pool.query(
            "INSERT INTO reservation (status, resStart, resEnd, nasclient, numeroChambre, nomHotel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [status, resStart, resEnd, nasclient, numeroChambre, nomHotel]
        );
        res.json(newReservation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//CREATE LOCATION *working* only have to insert the mentionned parameters
app.post("/locations", async (req, res) => {
    try{
        const { nasclient, nasemploye, numchambre, locationstart, locationend, nomhotel, status } = req.body;
        const newLocation = await pool.query(
            "INSERT INTO location (nasclient, nasemploye, numchambre, locationstart, locationend, nomhotel, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [nasclient, nasemploye, numchambre, locationstart, locationend, nomhotel, status]
        );
        res.json(newLocation.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//CREATE CLIENT POST *working*
app.post("/clients", async (req, res) => {
    try {
        // Extract client information from the request body
        const { nas, prenom, nom, numRue, nomRue, ville, cp, registerDate } = req.body;

        // Insert the new client into the database
        const newClient = await pool.query(
            "INSERT INTO client (nas, prenom, nom, numRue, nomRue, ville, cp, registerDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [nas, prenom, nom, numRue, nomRue, ville, cp, registerDate]
        );

        // Respond with the newly created client record
        res.json(newClient.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to create client" });
    }
});

// UPDATE ROOM given room id
app.patch("/rooms/:roomnumber", async (req, res) => {
    try {
        // Extract room ID from URL parameters
        const { numerochambre } = req.params;

        // Extract updated room details from request body
        const { prixparnuit, vue, dommages, capacite, extPhone } = req.body;

        // Update the room in the database
        const updatedRoom = await pool.query(
            "UPDATE chambre SET prixparnuit = $1, vue = $2, dommages = $3, capacite = $4, extPhone = $5 WHERE numerochambre = $6 RETURNING *",
            [prixparnuit, vue, dommages, capacite, extPhone, numerochambre]
        );

        console.log(2)
        res.json(updatedRoom.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to update room" });
    }
});



//CREATE HOTEL *working*
app.post("/hotels", async (req, res) => {
    try {
        // Extract hotel information and the chain it belongs to from the request body
        const { nomHotel, classification, nombreChambre, numRue, nomRue, ville, cp, phoneContact, emailContact, nomChaine } = req.body;

        // Check if the chain exists in the database
        const chainExists = await pool.query("SELECT * FROM chaine WHERE nomchaine = $1", [nomChaine]);

        if (chainExists.rows.length === 0) {
            return res.status(404).json({ error: `Chain '${nomChaine}' does not exist.` });
        }

        const newHotel = await pool.query(
            "INSERT INTO hotel (nomhotel, classification, nombrechambre, numrue, nomrue, ville, cp, phonecontact, emailcontact, nomchaine) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [nomHotel, classification, nombreChambre, numRue, nomRue, ville, cp, phoneContact, emailContact, nomChaine]
        );

        // Respond with the created hotel record
        res.json(newHotel.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to create hotel" });
    }
});

//CREATE ROOM given nomhotel *working*
app.post("/hotels/:nomHotel/rooms", async (req, res) => {
    try {
        // Extract hotel name from URL parameters
        const { nomHotel } = req.params;
        
        // Extract room details from request body
        const { numeroChambre, prixParNuit, vue, dommages, capacite, extPhone, occupied } = req.body;

        // Insert the new room into the database
        const newRoom = await pool.query(
            "INSERT INTO chambre (numeroChambre, prixParNuit, vue, dommages, capacite, extPhone, nomHotel, occupied) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [numeroChambre, prixParNuit, vue, dommages, capacite, extPhone, nomHotel, occupied]
        );

        res.json(newRoom.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to create new room" });
    }
});

//GET ALL HOTEL *working*
app.get("/hotels/", async (req, res) => {
    try {
        const allHotel = await pool.query("SELECT * FROM hotel");
        res.json(allHotel.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ROOM FOR HOTEL *working*
app.get("/hotels/:id/rooms", async (req, res) => {
    try {
        const { id } = req.params;
        const rooms = await pool.query("SELECT * FROM chambre WHERE nomhotel = $1 AND occupied=False", [id]);
        res.json(rooms.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET RESERVATIONS OF A CLIENT *working*
app.get("/clients/:nas/reservations", async (req, res) => {
    try {
        const { nas } = req.params
        const clientReservations = await pool.query("SELECT * FROM reservation WHERE nasclient = $1", [nas]);
        res.json(clientReservations.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL CLIENT RESERVATIONS *working*
app.get("/reservations", async (req, res) => {
    try {
        const reservations = await pool.query("SELECT * FROM reservation");
        res.json(reservations.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL EMPLOYEE
app.get("/employees", async (req, res) => {
    try {
       const employees = await pool.query("SELECT * FROM employe");
       res.json(employees.rows);
    } catch (error) {
        console.error(err.message);
    }
});

// GET ALL EMPLOYEES OF A SPECIFIC HOTEL
app.get("/hotels/:nomHotel/employees", async (req, res) => {
    const { nomHotel } = req.params; // Extract the hotel name from the request parameters
    try {
        // Query to select employees based on the hotel name
        const employees = await pool.query(
            "SELECT * FROM employe WHERE nomHotel = $1", [nomHotel]
        );
        // If employees are found, return them as JSON; otherwise, indicate no employees were found for the hotel
        if (employees.rows.length > 0) {
            res.json(employees.rows);
        } else {
            res.status(404).json({ message: `No employees found for hotel: ${nomHotel}` });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred while fetching employees." });
    }
});

//GET ALL LOCATIONS *working*
app.get("/locations", async (req, res) => {
    try {
        const locations = await pool.query("SELECT * FROM location");
        res.json(locations.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET LOCATIONS OF A CLIENT *working*
app.get("/clients/:nas/locations", async (req, res) => {
    try {
        const { nas } = req.params;
        const clientlocations = await pool.query("SELECT * FROM locations WHERE nasclient = $1", [nas]);
        res.json(clientlocations.rows);
    } catch (error) {
        console.error(err.message);
    }
});

//GET ALL CLIENTS *working*
app.get("/clients", async (req, res) => {
    try {
        const clients = await pool.query("SELECT * FROM client");
        res.json(clients.rows);
    } catch (error) {
        console.error(err.message);
    }
});

//GET SPECIFIC CLIENT INFO *working*
app.get("/clients/:nas", async (req, res) =>{
    try {
        const { nas } = req.params;
        const client = await pool.query("SELECT * FROM client WHERE nas = $1", [nas]);
        res.json(client.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//PATCH USER INFO UPDATE
app.patch("/clients/:nas", async (req, res) => {
    try {
        const { nas } = req.params; // The client's NAS from the URL
        const { prenom, nom, numRue, nomRue, ville, cp } = req.body; // The fields to update

        // Construct the SET part of the SQL query dynamically based on what's provided in req.body
        const updates = [];
        if (prenom !== undefined) updates.push(`prenom = '${prenom}'`);
        if (nom !== undefined) updates.push(`nom = '${nom}'`);
        if (numRue !== undefined) updates.push(`numRue = ${numRue}`);
        if (nomRue !== undefined) updates.push(`nomRue = '${nomRue}'`);
        if (ville !== undefined) updates.push(`ville = '${ville}'`);
        if (cp !== undefined) updates.push(`cp = '${cp}'`);

        const setClause = updates.join(', ');

        // Ensure there's at least one field to update
        if (updates.length === 0) {
            return res.status(400).json({ error: "You must provide at least one field to update." });
        }

        const updateQuery = `UPDATE client SET ${setClause} WHERE nas = $1 RETURNING *;`;
        const updatedClient = await pool.query(updateQuery, [nas]);

        if (updatedClient.rows.length === 0) {
            return res.status(404).json({ error: "Client not found." });
        }

        res.json(updatedClient.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//PATCH ROOM INFO UPDATE *working*
app.patch("/hotels/:name/rooms/:id", async (req, res) => {
    try {
        // Extracting hotel name and room ID from the request URL
        const { name, id } = req.params;

        // Assuming you're sending room update data as JSON in the request body
        const { prixParNuit, vue, dommages, capacite, extPhone, occupied } = req.body;

        // Constructing SQL query to update room information
        const query = `
            UPDATE chambre 
            SET 
                prixParNuit = COALESCE($1, prixParNuit), 
                vue = COALESCE($2, vue), 
                dommages = COALESCE($3, dommages), 
                capacite = COALESCE($4, capacite), 
                extPhone = COALESCE($5, extPhone),
                occupied = COALESCE($6, occupied)
            WHERE numeroChambre = $7 AND nomHotel = $8
            RETURNING *;
        `;

        // Executing the SQL query
        const { rows } = await pool.query(query, [prixParNuit, vue, dommages, capacite, extPhone, occupied, id, name]);

        // Sending back the updated room information
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Room not found or no changes made." });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//PATCH LOCATION INFO (UPDATE STATUS OR PAYMENT OR BOTH) *working*
app.patch("/locations/:locationID/status", async (req, res) => {
    const { locationID } = req.params; // Get the locationID from the URL parameters
    const { status, paymentID } = req.body; // Get the new status and optional paymentID from the request body

    // Validate the status
    if (!["active", "archived"].includes(status)) {
        // If the status is not one of the valid options, return an error response
        return res.status(400).json({ error: "Status must be either 'active' or 'archived'." });
    }

    try {
        // Prepare the SQL UPDATE statement to update the status and optionally the paymentID
        const updateQuery = `
            UPDATE location
            SET status = $1,
                paymentid = COALESCE($2, paymentid) 
            WHERE locationid = $3
            RETURNING *; 
        `;

        // Execute the UPDATE statement
        const { rows } = await pool.query(updateQuery, [status, paymentID ? paymentID : null, locationID]);

        // Check if the update was successful (i.e., if any row was actually updated)
        if (rows.length === 0) {
            // No location found with the given locationID
            return res.status(404).json({ error: `No location found with locationID: ${locationID}.` });
        }

        // Return the updated location
        res.json({ message: "Location status and payment updated successfully.", location: rows[0] });
    } catch (err) {
        console.error(`An error occurred: ${err.message}`);
        res.status(500).json({ error: "An error occurred while updating the location status and payment." });
    }
});

//PATCH RESERVATION INFO (UPDATE STATUS TO 'active' or 'archived')
app.patch("/reservations/:resID/status", async (req, res) => {
    const { resID } = req.params; // Get the locationID from the URL parameters
    const { status } = req.body; // Get the new status from the request body

    // Validate the status
    if (!["active", "archived"].includes(status)) {
        // If the status is not one of the valid options, return an error response
        return res.status(400).json({ error: "Status must be either 'active' or 'archived'." });
    }

    try {
        // Prepare the SQL UPDATE statement to only update the status
        const updateQuery = `
            UPDATE reservation
            SET status = $1
            WHERE resid = $2
            RETURNING *;  
        `;

        // Execute the UPDATE statement
        const { rows } = await pool.query(updateQuery, [status, resID]);

        // Check if the update was successful (i.e., if any row was actually updated)
        if (rows.length === 0) {
            // No location found with the given locationID
            return res.status(404).json({ error: `No reservation found with resID: ${resID}.` });
        }

        // Return the updated location
        res.json({ message: "Reservation status updated successfully.", reservation: rows[0] });
    } catch (err) {
        console.error(`An error occurred: ${err.message}`);
        res.status(500).json({ error: "An error occurred while updating the reservation status." });
    }
});

//DELETE HOTEL given nomhotel *working*
app.delete("/hotels/:nomHotel", async (req, res) => {
    try {
        // Extract the hotel's name from the URL parameters
        const { nomHotel } = req.params;

        // Attempt to delete the hotel from the database
        const deleteHotel = await pool.query(
            "DELETE FROM hotel WHERE nomhotel = $1 RETURNING *", 
            [nomHotel]
        );

        if (deleteHotel.rowCount === 0) {
            return res.status(404).json({ message: `Hotel '${nomHotel}' does not exist or could not be deleted.` });
        }

        res.json({ message: `Hotel '${nomHotel}' was successfully deleted.`, deletedHotel: deleteHotel.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to delete hotel" });
    }
});

//DELETE ROOM given nomhotel and numerochambre *working*
app.delete("/hotels/:nomHotel/rooms/:numeroChambre", async (req, res) => {
    try {
        // Extract hotel name and room number from URL parameters
        const { nomHotel, numeroChambre } = req.params;

        // Delete the specified room from the database
        const result = await pool.query(
            "DELETE FROM chambre WHERE nomHotel = $1 AND numeroChambre = $2 RETURNING *",
            [nomHotel, numeroChambre]
        );

        // Check if a room was actually deleted
        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Room not found" });
        }

        res.json({ message: "Room deleted successfully", deletedRoom: result.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to delete room" });
    }
});

//DELETE CLIENT *working* using NAS
app.delete("/clients/:nas", async (req, res) => {
    try {
        const { nas } = req.params;
        // Attempt to delete the client with the specified NAS
        const deleteClient = await pool.query("DELETE FROM client WHERE nas = $1 RETURNING *", [nas]);

        if (deleteClient.rowCount === 0) {
            return res.status(404).json({ message: `Client with NAS ${nas} not found.` });
        }

        res.json({ message: "Client deleted successfully.", deletedClient: deleteClient.rows[0] });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred while deleting the client." });
    }
});


app.listen(5000, () => {
    console.log("server has started on port 5000")
});