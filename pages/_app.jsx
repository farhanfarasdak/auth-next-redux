import { Provider } from 'react-redux';
import myStore from '../redux/store';
import '../styles/globals.css';
import 'video-react/dist/video-react.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={myStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
