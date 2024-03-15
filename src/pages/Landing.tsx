import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import LinkButton from "../components/LinkButton";
import Scroll from "../components/Scroll";

export default function Landing() {
  return (
    <div className="bg-image">
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
          <LinkButton href="https://krasnalcoin.pl/wp-content/uploads/2024/02/Litepaper-Krasnalcoina.pdf">
            Read&nbsp;<Box fontWeight="bold">LitePaper</Box>
          </LinkButton>
          <LinkButton href="https://app.krasnalcoin.finance/">
            Open&nbsp;<Box fontWeight="bold">App</Box>
          </LinkButton>
        </Stack>
        <Scroll marginTop={{ xs: 4, md: 8 }} />
      </Stack>
    </div>
  );
}
