import mysql from 'mysql'
import dbConfig from '../config/db.config.js'

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
})

connection.connect(err=>{
    if (err) throw err;
    console.log("Successfully connected to the database!")
})

export default connection