import { Container, createTheme, ThemeProvider } from "@mui/material"
import '@fontsource/lancelot'
import './index.css'
import HomePage from "./pages/home"
import CssBaseline from '@mui/material/CssBaseline';
import { themeOptions } from "./config/theme";

const theme = createTheme(themeOptions);

function App() {

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{fontFamily: 'Barlow'}}>
          <HomePage />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
