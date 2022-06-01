const from = () => {  
return(
    
<div>

<form action="/api/insert" method="post">
        <h1 className="text">
        Next Js Insert Update Delete Demo CRUD !! 
        </h1>
<div className="footer-form">
        <div className="footer-name">
            {/* <div className="footer-filed">
                <label for="first">Id</label><br />
                <input type="text" id="first" name="first"/>
            </div> */}
            <div className="footer-filed">
                <label for="name">Name</label><br />
                <input type="text" id="name" name="name"/>
            </div>
            <div className="footer-filed">
                <label for="email">Email</label><br />
                <input type="email" id="email" name="email"/>
            </div>

            <div className="footer-filed">
                <label for="pass">Password</label><br />
                <input type="textarea" id="pass" name="pass"/>
            </div>
        
        </div>
        
            <div className="footer-filed">
                <button className="btn">submit</button>
            </div>

    </div>
</form>    

</div>
);
}
    
export default from;