import '../styles/globals.css'
import MainLayout from '../src/components/layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (

  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>

  )
  
}

export default MyApp
