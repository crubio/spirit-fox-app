import { Box, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import HeroImg from '../assets/sf-logo.png'
import BookImg from '../assets/coloring-book-cover.png'
import StickyFooter from "../components/common/footer"
import styled from "@emotion/styled";
import DefaultLink from "../features/common/link";
import FaceIcon from '@mui/icons-material/Face';
import PaletteIcon from '@mui/icons-material/Palette';
import PrintIcon from '@mui/icons-material/Print';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LanguageIcon from '@mui/icons-material/Language';
import FeaturedCard from "../features/common/card";
import { EmailSubscribe } from "../lib/subscription";

export const Item = styled(Paper)(({}) => {
  return {
    padding: 2,
    elevation: 1
  };
});

function HeroComponent() {
  return (
    <Grid container spacing={0}
      sx={{ height: '90vh', backgroundColor: 'secondary.main'}}
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
            Visit our <DefaultLink href={"https://www.amazon.com/stores/Spirit-Fox-LLC/author/B0DPH38WY5"}>Amazon store</DefaultLink> for the latest books from Spirit Fox.
          </p>
        </Box>
      </Grid>
      <Grid item xs />
    </Grid>
  )
}

function FeaturedComponent() {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: 'primary.main', color: 'secondary.main', pb: 4
       }}
    >
      <Box sx={{p: 4}}>
        <Typography variant="h4" align="center" fontWeight={"600"}>Featured</Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={5}>
          <Box>
            <FeaturedCard title="Bible Verses: A Coloring Book for Girls" subheader={"spirit fox press"} alt={"Bible Verses: A Coloring Book for Girls"} image={BookImg} buttonHref={"https://www.amazon.com/dp/B0DP7YCVF4"} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box sx={{pr: 2, pl: 2}}>
            Bible Verses: A Coloring Book for Girls invites girls ages 5+ to unleash their creativity with this engaging coloring book. A perfect gift for daughters, nieces, Goddaughers, or any special young girl in your life. Featuring over fifty pages of hand-drawn illustrations of cherished Biblical verses and wisdom on womanhood and feminity, it's perfect for solo reflection or group gatherings. Bible Verses: A Coloring Book for Girls encourages creativity and spirituality, and fosters a deeper connection to the Lord. Grab the colored pencils and embark on a colorful journey through timeless biblical adventures!
          </Box>
          <List>
            <ListItem>
              <PaletteIcon />
              <ListItemText sx={{ml: 1}} primary="Over 50 pages of hand-drawn illustrations & original artwork" />
            </ListItem>
            <ListItem>
              <FaceIcon />
              <ListItemText sx={{ml: 1}} primary="Suitable for kids of all ages, 5 and up" />
            </ListItem>
            <ListItem>
              <Diversity1Icon />
              <ListItemText sx={{ml: 1}} primary="Perfect for solo reflection or group gatherings" />
            </ListItem>
            <ListItem>
              <PrintIcon />
              <ListItemText sx={{ml: 1}} primary="105 pages" />
            </ListItem>
            <ListItem>
              <LanguageIcon />
              <ListItemText sx={{ml: 1}} primary="Available in English" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>
    </Container>
  )
}

function AboutComponent() {
  return (
    <>
      <Container maxWidth={false} sx={{ backgroundColor: 'secondary.main' }}>
        <Box
          component="img"
          sx={{
            height: 100,
            width: 100,
            borderRadius: 50,
            position: 'absolute',
            maxHeight: { xs: 233 },
            maxWidth: { xs: 350 },
            backgroundColor: 'info.main',
            marginTop: "16px",
          }}
          alt="spirit fox logo"
          src={HeroImg}
        />
        <Grid container sx={{padding: 2}}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight={"600"}
              sx={{
                textAlign: 'center'
              }}
            >
              {"About us"}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{marginTop: 8}}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                paddingLeft: 8,
                paddingRight: 8
              }}
            >
              Spirit Fox Press is a small, independent publishing company based in the United States. Our mission is to create and publish high-quality, engaging books that inspire and empower readers of all ages. We specialize in children's books, coloring books, and more. Our books are available for purchase on Amazon and other online retailers. Thank you for supporting independent publishing!
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center'
              }}
            >
              For more information, please visit our <DefaultLink href="https://www.amazon.com/stores/Spirit-Fox-LLC/author/B0DPH38WY5">Amazon store</DefaultLink>, or email us <DefaultLink href="mailto:inquiries@spiritfoxllc.com">here</DefaultLink>.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{marginTop: 2}}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center'
              }}
            >
              Want to hear about our latest releases and special offers? Sign up for our newsletter here. 
              <Box sx={{mt:2}}>
                <EmailSubscribe />
              </Box>
            </Typography>
          </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

function HomePage() {
  return (
    <>
      <HeroComponent />
      <FeaturedComponent />
      <AboutComponent />
      <StickyFooter />
    </>
  )
}

export default HomePage