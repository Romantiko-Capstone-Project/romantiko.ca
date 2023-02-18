import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/globals.css'
import MainLayout from '../src/components/layout/MainLayout'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])
  return (

    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>



  )

}

export default MyApp