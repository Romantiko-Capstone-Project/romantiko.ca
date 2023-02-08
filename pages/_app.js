import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import MainLayout from '../src/components/layout/MainLayout'
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (

  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>

  )
  
}

export default MyApp
