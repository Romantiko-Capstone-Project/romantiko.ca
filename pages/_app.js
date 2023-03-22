import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import '../styles/globals.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Dashboard.css'
import MainLayout from '../src/components/layout/MainLayout'
import { useEffect  } from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null
  }, [])



  return (

    <Provider store={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    </Provider>



  )

}

export default MyApp