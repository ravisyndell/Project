export default function blog (props){
const {posts} =props;
console.log(posts);
return <div>

    <h1>welcome to the blog Page layout</h1>
    {
        //here

    }
</div>
}

export async function getstaticprops(context){
const res = await fetch("http://localhost:3000/api/posts");
const posts = await res.json();

return{
    props:{posts}
};
}