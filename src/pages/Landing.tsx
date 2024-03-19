import { Box, BoxProps, Stack, Typography } from "@mui/material";
import Background from "../assets/background_upper.png";
import Logo from "../assets/logo.png";
import LinkButton from "../components/LinkButton";
import Scroll from "../components/Scroll";

export default function Landing(props: BoxProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        flex: 1,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        animationName: "fadeIn",
        animationDuration: "2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <Stack alignItems="center" pb={{ xs: 6, md: 0 }}>
        <img src={Logo} className="logo" />
        <Typography
          className="animate-charcter"
          variant="h4"
          textAlign="center"
          mt={{ xs: 2, md: 4 }}
        >
          AI-Driven <br />
          Crypto Magic
        </Typography>
        <Stack spacing={{ xs: 1, md: 2 }} mt={{ xs: 2, md: 4 }}>
          <LinkButton href="https://quickswap.exchange/#/swap?swapIndex=1&currency0=ETH&currency1=0x784665471bB8B945b57A76a9200B109Ee214E789">
            Buy&nbsp;<Box fontWeight="bold">$KC</Box>
          </LinkButton>
          <LinkButton href="https://app.krasnalcoin.finance/">
            Open&nbsp;<Box fontWeight="bold">App</Box>
          </LinkButton>
        </Stack>
        <Scroll marginTop={{ xs: 4, md: 8 }} />
      </Stack>
    </Box>
  );
}
