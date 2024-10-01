import db from "../db";
import { ResultSetHeader, RowDataPacket  } from 'mysql2';

type UserData = {
    email: string;
    password_hash: string;
}

export const createUser = (userData : UserData ) : Promise<ResultSetHeader> =>{
    const { email, password_hash} = userData;
    const query = `INSERT INTO users (email, password_hash) VALUES (?, ?)`;
    
    return new Promise((resolve, reject) =>{
        db.query(query, [email, password_hash], (err, results) =>{
            if(err){
                return reject(err);
            }
            resolve(results as ResultSetHeader);
        } )
    })
}

export const findByEmail = (email :string) : Promise<RowDataPacket | null>=> {
    const query = `SELECT * FROM users WHERE email = ?`;
    
    return new Promise( (resolve , reject) => {
        db.query(query, [email], (err, results) =>{
            if(err){
                return reject(err);
            }
            const rows = results as RowDataPacket[];
            resolve(rows.length > 0 ? rows[0] : null);
        })
    })
}