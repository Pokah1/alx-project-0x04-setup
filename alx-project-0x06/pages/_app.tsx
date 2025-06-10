import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";  
import { Provider } from "react-redux";
import store from "@/store/store";
import { CountProvider } from "@/context/CountContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider
    store={store}>
<CountProvider>
  <Layout>
    <Component {...pageProps}/>
  </Layout>
</CountProvider>
    </Provider>
  );
}