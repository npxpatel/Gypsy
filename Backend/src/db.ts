import mysql from 'mysql2';

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) =>{
        if(err){
            console.log("Error in connecting to the Database");
            return ;
        }
        console.log("Connected to database as id", db.threadId);
})

export default db;