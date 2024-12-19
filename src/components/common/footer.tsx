import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { themeOptions } from '../../config/theme';

function Copyright() {
  return (
    <Typography variant="body1" color="text.secondary" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="https://spiritfoxllc.com/">
        www.spiritfoxllc.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO - Add a theme switcher later on

export default function StickyFooter() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: "primary.main",
            color: "secondary.main"
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" align='center'>
              SPIRIT FOX LLC
            </Typography>
            <Copyright />
          </Container>
        </Box>
    </ThemeProvider>
  );
}