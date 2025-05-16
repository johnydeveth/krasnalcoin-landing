import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import Background from "../assets/background_upper.webp";
import Logo from "../assets/logo.png";
import BackgroundMusic from "../components/BackgroundMusic";
import LanguageSelector from "../components/LanguageSelector";
import LinkButton from "../components/LinkButton";
import Scroll from "../components/Scroll";

export default function Landing(props: BoxProps) {
  const { t } = useTranslation();

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

        <Typography
          className="animate-charcter"
          variant="h4"
          textAlign="center"
          mt={{ xs: 2, md: 4 }}
        >
          <Trans i18nKey="landing.title" />
        </Typography>
        <Stack spacing={{ xs: 1, md: 2 }} mt={{ xs: 2, md: 4 }}>
          <LinkButton href="https://swap.defillama.com/?chain=polygon&from=0x0000000000000000000000000000000000000000&tab=swap&to=0x784665471bb8b945b57a76a9200b109ee214e789">
            {t("landing.buy")}&nbsp;<Box fontWeight="bold">$KC</Box>
          </LinkButton>
          <LinkButton href="https://app.krasnalcoin.finance/">
            {t("landing.open")}&nbsp;<Box fontWeight="bold">App</Box>
          </LinkButton>
        </Stack>
        <Scroll marginTop={{ xs: 4, md: 8 }} />
      </Stack>
    </Box>
  );
}
