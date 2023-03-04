import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';
import Landing from '../src/layouts/landing_layout/Landing';
import { SnackbarProvider } from 'notistack'
export default function App({ Component, pageProps }) {
  const renderLayout = Component.getLayout || function (page) { return <Landing>{page}</Landing> }
  return (
    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {renderLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SnackbarProvider>
  )
}
