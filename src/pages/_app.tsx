import '@src/css/custom.css';
import type { AppProps } from 'next/app';
import Navbar from "@src/components/Navbar";
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { CssVarsProvider } from "@mui/joy/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider>
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </CssVarsProvider>
    </>
  );
}
