import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from  '../components/Menu'
import Particlesanimation from '../components/Home/Particles';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <title>CWare Technologies</title>
        <meta name="description" content="CWare Technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particlesanimation />
      <Component {...pageProps} />
  </>
}

export default MyApp
