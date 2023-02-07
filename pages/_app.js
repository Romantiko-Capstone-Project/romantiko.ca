import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import MainLayout from '../src/components/layout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (

    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  )

}

export default MyApp
