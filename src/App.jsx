import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
  <div>
    <Provider store={appStore}>
        <Body />
    </Provider>
  </div>
  )
}

export default App
