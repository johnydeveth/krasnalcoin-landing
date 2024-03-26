import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Background from "../assets/background_bottom.png";
import EiAi from "../assets/eiai.png";
import Gang from "../assets/gangkrasnali.png";
import OldLogo from "../assets/oldlogo.png";
import Description from "../components/Description";
import TokenomicsData from "../components/TokenomicsData";
import TokenomicsItem from "../components/TokenomicsItem";
import WhiteContainer from "../components/WhiteContainer";
import useOnScreen from "../hooks/useOnScreen";

export const xlHorizontalPadding = "200px";
export const mdHorizontalPadding = "140px";

export default function Tokenomics() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const { t } = useTranslation();
  return (
    <Box
      height="100%"
      maxHeight="100%"
      sx={{
        backgroundImage: `url(${Background})`,
        flex: 1,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Stack
        ref={ref}
        direction="row"
        sx={{
          position: "absolute",
          bottom: "8%",
          right: {
            xs: mdHorizontalPadding,
            xl: xlHorizontalPadding,
          },
        }}
        spacing={5}
        alignItems="flex-end"
      >
        <Stack
          direction="column"
          spacing={3}
          sx={{
            animationName: isVisible ? "SlideUp" : undefined,
            animationDuration: "0.6s",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <WhiteContainer
            direction="column"
            paddingX={5}
            paddingY={2}
            alignItems="center"
          >
            <Typography variant="h4">{t("friends.title")}</Typography>
            <Typography variant="h6">{t("friends.subtitle")}</Typography>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              spacing={5}
              paddingTop={3}
            >
              <TokenomicsItem
                img={OldLogo}
                url="https://app.krasnalcoin.finance/"
                text="Staking"
              />
              <TokenomicsItem
                img={EiAi}
                round
                url="https://ejaj.krasnalcoin.finance/"
                text="AYE-EYE"
              />
              <TokenomicsItem
                img={Gang}
                round
                url="https://linktr.ee/gangkrasnali"
                text="GangKrasnali"
              />
            </Stack>
          </WhiteContainer>
          <TokenomicsData />
        </Stack>
        <WhiteContainer
          sx={{
            width: "425px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "50px",
            animationName: isVisible ? "SlideUp" : undefined,
            animationDuration: "0.5s",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <Description />
        </WhiteContainer>
      </Stack>
    </Box>
  );
}
