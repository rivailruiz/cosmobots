const Pool = require('pg').Pool

//DB
const pool = new Pool({
    user: 'ruiz',
    host: '127.0.0.1',
    database: 'cosmobots',
    password: 'q1w2e3',
    port: 5432,
})

export { pool }