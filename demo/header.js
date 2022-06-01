import Link from "next/link";
import image from "next/image";

const Header = () => {
  return (  
    <nav>
      
      <div className="header">
        <img className="logo" src="/unnamed.png" width={120} height={80}/>
      <div className="header-right">
      <Link  className="active" href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/from"><a>From</a></Link>
      <Link href="/menu"><a>Menu</a></Link>
      <Link href="/conatct"><a>Contact</a></Link>
      <Link href="/conatct"><a>Login</a></Link>
      </div>
      </div>
    </nav>  

  );
}
 
export default Header;