export default function handler(req, res) {

    const body = req.body

    // console.log('body: ', body)

    if (!body.name || !body.email || !body.pass) {
      return res.json({ data: 'First or last name not found' })
    }

  res.json(`${body.name} ${body.email} ${body.pass}`);
  
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'demo'
    });
     connection.connect();

     
     connection.query("INSERT INTO `posts` ( `name`, `email`, `pass`) VALUES (?, ?, ?) ", [ body.name , body.email , body.pass ] , 
     (error, results) => {
         
            if (error) {
                console.log("Error");
            }
    
            else {
                console.log("Success");
            }
        });
     
     connection.end();

     }


  