import { getSession } from 'next-auth/react'

function Blog({ data }) {
  return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
  console.log("inside server side props")
  const session = await getSession(context)
  return {
    props: {
      data: session ? 'List of 100 perzonalized blogs' : 'List of free blogs',
      session                    // helps by sending session obj to pageProps in _app.js which then can be Provided to Navbar component serverside using useSession()
    }
  }
}