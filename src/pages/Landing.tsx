import { Box, BoxProps, Stack, Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";
import Background from "../assets/background_upper.png";
import Logo from "../assets/logo.png";
import BackgroundMusic from "../components/BackgroundMusic";
import LanguageSelector from "../components/LanguageSelector";
import Scroll from "../components/Scroll";

export default function Landing(props: BoxProps) {
  // const { t } = useTranslation();

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
      <LanguageSelector />
      <BackgroundMusic />
      <Stack alignItems="center" pb={{ xs: 6, md: 0 }}>
        <Box position="relative">
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) scale(2.5)",
              overflow: "show",
            }}
          >
            <div className="circle circle-slow xxlarge shade1"></div>
            <div className="circle circle-slow xlarge shade2"></div>
            <div className="circle circle-slow large shade3"></div>
            <div className="circle circle-slow mediun shade4"></div>
            <div className="circle circle-slow small shade5"></div>
          </Box>
          <img src={Logo} className="logo" />
        </Box>

        <Typography variant="body1" textAlign="center" maxWidth={400}>
          Smart Contract Address:{" "}
          <b>0xcb6a72d1ca3b46fc4ca35ed7d3379e51435d5f52</b>
          <br />
          DexTools:
          <a href="https://www.dextools.io/app/en/base/pair-explorer/0x672043650061e3d5c3a1db52741499be4a3eec66">
            https://www.dextools.io/app/en/base/pair-explorer/0x672043650061e3d5c3a1db52741499be4a3eec66
          </a>
          <br />
          Discord:{" "}
          <a href="https://discord.gg/37UQ98R7">https://discord.gg/37UQ98R7</a>
          <br />
          Telegram: <a href="https://t.me/dwarfai">https://t.me/dwarfai</a>
          <br />
          Twitter:{" "}
          <a href="https://twitter.com/DwarfAI">https://twitter.com/DwarfAI</a>
          <br />
          Extra:{" "}
          <a href="https://app.krasnalcoin.finance/">
            https://app.krasnalcoin.finance/
          </a>
          <br />
          Instagram:{" "}
          <a href="https://www.instagram.com/dwarf_ai">
            https://www.instagram.com/dwarf_ai
          </a>
          <br />
          Youtube:{" "}
          <a href="https://www.youtube.com/@Dwarf_AI">
            https://www.youtube.com/@Dwarf_AI
          </a>
          <br />
          NFT:{" "}
          <a href="https://opensea.io/collection/ejajkrasnal">
            https://opensea.io/collection/ejajkrasnal
          </a>
        </Typography>
        {/* <Typography
          className="animate-charcter"
          variant="h4"
          textAlign="center"
          mt={{ xs: 2, md: 4 }}
        >
          <Trans i18nKey="landing.title" />
        </Typography>
        <Stack spacing={{ xs: 1, md: 2 }} mt={{ xs: 2, md: 4 }}>
          <LinkButton href="https://app.uniswap.org/swap?outputCurrency=0xcb6a72d1ca3b46fc4ca35ed7d3379e51435d5f52">
            {t("landing.buy")}&nbsp;<Box fontWeight="bold">$DWF</Box>
          </LinkButton>
          <LinkButton href="https://app.krasnalcoin.finance/">
            {t("landing.open")}&nbsp;<Box fontWeight="bold">App</Box>
          </LinkButton> 
        </Stack>*/}
        <Scroll marginTop={{ xs: 4, md: 8 }} />
      </Stack>
    </Box>
  );
}
