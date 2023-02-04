import  Head  from 'next/head'
import Footer from '../components/layout/Footer'

function About() {
    return (
        <>
            <Head>
                <title>Next JS Learning</title>
                <meta name='description' content='learning on next js' />
            </Head>
            <h1 className='content'>About</h1>
        </>
    )
}
export default About

About.getLayout = function Pagelayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}