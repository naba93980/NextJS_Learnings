import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/layout.css'

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name='description' content='Awesome NextJS tutorial' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
