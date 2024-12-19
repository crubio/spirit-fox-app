import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"

interface FeaturedCardProps {
  title: string;
  subheader: string;
  alt: string;
  image: string;
  buttonHref: string;
}

export default function FeaturedCard(props: FeaturedCardProps) {
  const {title, subheader, image, alt, buttonHref} = props
  return(
    <>
      <Card sx={{ maxWidth: 345, ml: "auto" }}>
        <CardHeader
          title={title}
          subheader={subheader}
        />
        <CardMedia
          component="img"
          height="400"
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            On sale now at our Amazon store.
          </Typography>
          <Button size="small" href={buttonHref}>
            Shop now
          </Button>
        </CardContent>
      </Card>
    </>
  )
}