// import { sql_query } from "../../lib/db";

// const handler = async (_, res) => {
//     try {
//         const results = await sql_query (`SELECT * FROM posts`);
//         return res.json(results);
//     }
//     catch (e){
//           res.status(500).json ({ message: e.message });
//     }
// }

// export default handler;

import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
  }

});
const handler = async (_, res) => {
    try {
        db.connect();
 
        db.query('SELECT * from `posts`', (error, results) => {
               if (error) {
                   console.log("Error");
               }
       
               else {
                   res.json(results);
               }
           });
        
        db.end(); 
       } 
    
    catch {
        console.log("error");
    }
  }
  
export default handler;
