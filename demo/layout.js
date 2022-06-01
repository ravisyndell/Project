import Header from "./header";
import Footer from "./footer";

const layout = ({ children}) => {
    return ( 
        <div className="content">
            <Header />
            { children}
            <Footer />
        </div>

     );
}
 
export default layout;