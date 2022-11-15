import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function Footer() {
  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        backgroundColor: "#333",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          margin: "15px 0",
        }}
      >
        <Box
          component="img"
          src="/ojLogo.png"
          alt="Orange Evolution"
          sx={{
            width: "25%",
            filter: "grayscale(1)",
            transition: ".4s",
            "&:hover": { filter: "grayscale(0)" },
          }}
        />
        <Box
          component="img"
          src="/oeLogo.svg"
          alt="Orange Evolution"
          sx={{
            width: "25%",
            filter: "grayscale(1)",
            transition: ".4s",
            "&:hover": { filter: "grayscale(0)" },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          margin: "15px 0",
        }}
      >
        <Link
          href="https://www.instagram.com/orangejuicetech/?theme=dark"
          target={"_blank"}
          rel="noopener"
          sx={{
            color: "#fff",
            transition: ".4s",
            "&:hover": { color: "#838383" },
          }}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.facebook.com/orangejuicef"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            transition: ".4s",
            "&:hover": { color: "#838383" },
          }}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://twitter.com/orangejuicefc"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            transition: ".4s",
            "&:hover": { color: "#838383" },
          }}
        >
          <TwitterIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/company/orangejuicetech/"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            transition: ".4s",
            "&:hover": { color: "#838383" },
          }}
        >
          <LinkedInIcon />
        </Link>
      </Box>
      <Typography mb={3}>
        © 2022 Orange Evolution: All Rights Reserved
      </Typography>
    </Container>
  );
}
