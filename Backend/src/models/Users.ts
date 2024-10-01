import db from "../db";

type UserData = {
    email: string;
    password_hash: string;
}

export const createUser = (userData : UserData ) =>{
    const { email, password_hash} = userData;
    const query = `INSERT INTO users (email, password_hash) VALUES (?, ?)`;
    
    return new Promise((resolve, reject) =>{
        db.query(query, [email, password_hash], (err, results) =>{
            if(err){
                return reject(err);
            }
            resolve(results);
        } )
    })
}
