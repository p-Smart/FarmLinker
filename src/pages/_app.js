import Head from 'next/head';
import './../styles/global.css'
import './../styles/media.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import GlobalContext from 'src/contexts/globalContext';
import { useEffect, useRef, useState } from 'react';
// import { register } from 'swiper/element/bundle';
// register()
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { Toaster } from 'react-hot-toast';


const App = ({ Component, pageProps }) => {

  const theme = createTheme();

  const [openCart, setOpenCart] = useState(false)
  const [globalData, setGlobalData] = useState({
    cartNumber: 0
  })

  const tawkMessenger = useRef(null)
  


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
        setOpenCart,
        tawkMessenger
      }}>
      <Toaster
      position="top-center"
      duration={5000}
      />
      <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>

    <TawkMessengerReact
    ref={tawkMessenger}
    propertyId="655438e5958be55aeaafb468"
    widgetId="1hf8fsh1l"
    />
    </>
  )
};

export default App;
