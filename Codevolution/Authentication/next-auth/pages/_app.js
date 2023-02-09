import '../components/Navbar.css'
import Navbar from '../components/Navbar.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}