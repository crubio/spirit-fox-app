import { Link } from "@mui/material";

interface DefaultLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function DefaultLink(props: DefaultLinkProps) {
  return (
    <>
      <Link
        href={props.href}
        sx={{
          color: 'info.main',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {props.children}
      </Link>
    </>
  )
}