import { Box, Container, Grid, Typography } from "@mui/material";
import { Item } from "../../pages/home";


export default function BookList() {
  return (
    <>
      <Container sx={{ backgroundColor: 'secondary.main' }}>
        <Box sx={{padding: '16px'}}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center'
            }}
          >
            {"More books from Spirit Fox"}
          </Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4}>
            <Item square sx={{backgroundColor: 'primary.main'}}>
              <Typography variant="h4" component="h2">
                Book 1
              </Typography>
              <Typography>
                Description of Book 1
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Item square sx={{backgroundColor: 'primary.main'}}>
              <Typography variant="h4" component="h2">
                Book 2
              </Typography>
              <Typography>
                Description of Book 2
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item square sx={{backgroundColor: 'primary.main'}}>
              <Typography variant="h4" component="h2">
                Book 3
              </Typography>
              <Typography>
                Description of Book 3
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}