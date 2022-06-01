// // import mysql from 'serverless-mysql';

// // export const db = mysql({
// //   config: {
// //     host: process.env.MYSQL_HOST,
// //     database: process.env.MYSQL_DATABASE,
// //     user: process.env.MYSQL_USERNAME,
// //     password: process.env.MYSQL_PASSWORD,
// //   }
// // });
// // export default async function excuteQuery({ query, values }) {
// //   try {
// //     const results = await db.query(query, values);
// //     await db.end();
// //     return results;
// //   } 
  
// //   catch (error) {
// //     return { error };
// //   }
// // }

// import mysql from 'serverless-mysql';

// export const db = mysql({
//   config: {

//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//   }

// });

// const handler = async (_, res) => {
//     try {
//         db.connect();
 
//         db.query('SELECT * from `posts`', (error, results) => {
//                if (error) {
//                    console.log("Error");
//                }
       
//                else {
//                    res.json(results);
//                }
//            });
        
//         db.end(); 
//        } 
    
//     catch {
//         console.log("error");
//     }
//   }
  

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