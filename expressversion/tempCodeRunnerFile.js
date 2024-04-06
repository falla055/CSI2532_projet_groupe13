//CREATE LOCATION
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
