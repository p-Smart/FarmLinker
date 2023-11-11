import Head from 'next/head';
import './../styles/global.css'
import './../styles/media.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import GlobalContext from 'src/contexts/globalContext';
import { useState } from 'react';
import { register } from 'swiper/element/bundle';
register()


const App = ({ Component, pageProps }) => {

  const theme = createTheme();

  const [openCart, setOpenCart] = useState(false)
  const [globalData, setGlobalData] = useState({
    cartNumber: 0
  })

  return (
    <>
    <Head>
    <title>FarmLinker</title>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider 
      value={{
        globalData, 
        openCart, 
        setOpenCart
      }}>
      <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
    </>
  );
};

export default App;
