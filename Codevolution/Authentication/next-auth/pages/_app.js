import '../components/Navbar.css'
import Navbar from '../components/Navbar.js'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
      <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
      
    </>
  )
}
