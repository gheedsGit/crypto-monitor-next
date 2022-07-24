import "../styles/globals.scss";
import { storeWrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default storeWrapper.withRedux(MyApp);
