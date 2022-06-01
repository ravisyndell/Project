import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h1>Oooopp....</h1>
        <h2> That Page cannot be found...</h2>
        <p>Go to Back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;