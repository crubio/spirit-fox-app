import { Container } from "@mui/material"
import '@fontsource/lancelot'
import './index.css'
import HomePage from "./pages/home"
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </>
  )
}

export default App
