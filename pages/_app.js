import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';
import Landing from '../src/layouts/landing_layout/Landing';

export default function App({ Component, pageProps }) {
  const renderLayout = Component.getLayout || function(page){return <Landing>{page}</Landing>}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {renderLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}
