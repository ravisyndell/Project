import Link from "next/link";


const Footer = () => {
    
    return ( 

        <div className="container">



                    <div className="col-main">

                    <div className="col-one">
                            <h6>About</h6>
                            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                        </div>

                        <div className="col-two">
                        <h6>QUICK LINKS</h6>
                                <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Abouts</a></li>
                                <li><a href="#">Demo</a></li>
                                <li><a href="#">Conatct</a></li>
                                <li><a href="#">Sitemap</a></li>
                                </ul>
                        </div>
                       
                        <div className="col-three">
                            <h6>About</h6>
                            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                        </div>

                        
                    </div>
                   
                    <div className="footermain">Copyright @2022 in Demo Next Js !! Hello</div> 
                    
        </div>
        
        );
}
 
export default Footer;