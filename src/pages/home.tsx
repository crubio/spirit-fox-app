import { Box, Grid, Typography } from "@mui/material"
import HeroImg from '../assets/sf-logo.png'
import StickyFooter from "../components/common/footer"

function HomePage() {
  return (
    <>
      <Grid container spacing={0}
      sx={{ height: '90vh' }}
      >
        <Grid item xs />
        <Grid
          item xs={12}
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '90vh' }}
        >
          <Typography
            variant="h1" gutterBottom
            sx={{
              fontFamily: 'lancelot',
              fontSize: '64px',
              textTransform: 'uppercase',
            }}
          >
            spirit fox press
          </Typography>
            <Box
              component="img"
              alt="spirit fox logo"
              src={HeroImg}
            />
          <Box
            sx={{
              fontSize: '24px'
            }}
          >
            <p className="kurale-regular">
              Coming soon!
            </p>
          </Box>
        </Grid>
        <Grid item xs />
      </Grid>
      <StickyFooter />
    </>
  )
}

export default HomePage