import Head from 'next/head';
import './../styles/global.css'
import './../styles/media.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';


const App = ({ Component, pageProps }) => {

  const theme = createTheme();

  return (
    <>
    <Head>
    <title>FarmLinker</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
};

export default App;
