// import Router from 'next/router'
// import Head from 'next/head'

// function HomePage(props) {
//    return (
//       <>
//          <Head>
//             <title>Welcome to Next.js!</title>
//          </Head>
//          <div>Welcome to Next.js!</div>
//          <span onClick={() => Router.push('/demo/test')}>First Post</span>
//          <br/>
//          <div>Next stars: {props.stars}</div>
//          <img src="/images.png" alt=" Logo" />
//       </>	    
//    )
// }

// export async function getServerSideProps(context) {
//    const res = await fetch('https://api.github.com/repos/vercel/next.js')
//    const json = await res.json()
//    return {
//       props: { stars: json.stargazers_count }
//    }
// }

// export default HomePage



import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      Click here to read more
    </button>
  )
}