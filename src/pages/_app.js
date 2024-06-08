// pages/_app.js
import "@/styles/globals.scss";
import SVGSymbols from "@/component/utils/SVGSymbols";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SVGSymbols />
      <Component {...pageProps} />
    </>
  );
}
