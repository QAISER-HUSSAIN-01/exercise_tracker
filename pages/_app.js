import '../styles/globals.css';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../src/theme';
import Landing from '../src/layouts/landingLayout/Landing';
import { SnackbarProvider } from 'notistack'
import Router from 'next/router'
import { useEffect, useState } from 'react';
import {CircularProgress} from '@mui/material'
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const renderLayout = Component.getLayout || function (page) { return <Landing>{page}</Landing> }
  useEffect(() => {
    const start = ()=>{setIsLoading(true)}
    const close = ()=>{setIsLoading(false)}
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', close);
    return ()=>{
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', close);
    }
  }, [])

  return (
    // <CookiesProvider>

    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {renderLayout(isLoading ? <Box sx={{width:'100%',height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress /></Box> : <Component {...pageProps} />)}
      </ThemeProvider>
    </SnackbarProvider>
    // </CookiesProvider>
  )
}
