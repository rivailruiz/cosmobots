const Pool = require('pg').Pool

//DB
const pool = new Pool({
    user: 'ruiz',
    host: 'localhost',
    database: 'cosmobots',
    password: 'q1w2e3',
    port: 5432,
})

export { pool }