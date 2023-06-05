import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import Layout from '../components/layout/layout';
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
      <><Head>
          <meta charSet="utf-8"/>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <meta name="description" content="B-Hitech web site"/>
          {/*<link rel="apple-touch-icon" href="./logo.png"/>*/}

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <title>B-Hitech</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </>
  );
}
