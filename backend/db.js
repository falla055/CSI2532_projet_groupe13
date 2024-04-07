const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "D(MGP3l5vLvu)RPe",
    host: "35.226.155.207",
    port: 5432,
    database: "csi2532-googlecloud"
});

module.exports = pool;
