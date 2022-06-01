import Link from "next/link";

export const getStaticProps = async () =>
{
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();
  return{
    props  : { test : data}
  }
}
const Home = ({ test }) =>
{
  return(
<div>
    <h1>Employee Data List View</h1>
    <div className="btn-add"> <Link href="/from"><a>Add New User</a></Link></div>

      <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Action</th>
      </thead>
      <tbody>
    
      {test.map( user => (
      <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.pass}</td>
      <td>
      <button class="bt1">Edit</button>
      <button class="bt1">Delete</button>
      </td>
      </tr>
      ))}
      
      </tbody>
      </table>
    </div>
  );
}
export default Home;