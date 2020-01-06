const Pool = require('pg').Pool

pool = new Pool({
    user: process.env.DB_ROLE,
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    password: process.env.DB_PWD,
    port: process.env.DB_PORT

})
const getUsers = (req, res) => {
    pool.query("SELECT * from users", (err, result) => {
        if (err)
            throw err
        res.json({ status: true, response: result.rows })
    })
}
const getUser = (req, res) => {
    userId = req.params.userId;
    pool.query("SELECT * from users where id = " + parseInt(userId) + "", (err, result) => {
        if (err)
            throw err
        res.json({ status: true, response: result.rows })
    })
}

const insertUser = (req, res) => {
    const { name, email } = req.body
    pool.query("insert into users (name,email) values ('" + name + "','" + email + "')", (err, result) => {
        if (err)
            throw err
        res.json({ status: true, count: result.rowCount })
    })

}
module.exports = {
    getUsers,
    getUser,
    insertUser
}