import { storeWrapper } from "../redux/store";

import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default storeWrapper.withRedux(MyApp);
