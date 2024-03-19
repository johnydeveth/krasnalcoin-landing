import { Box, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import EiAi from "../assets/eiai.png";
import Gang from "../assets/gangkrasnali.png";
import OldLogo from "../assets/oldlogo.png";
import TokenomicsData from "../components/TokenomicsData";
import TokenomicsItem from "../components/TokenomicsItem";
import WhiteContainer from "../components/WhiteContainer";
import useOnScreen from "../hooks/useOnScreen";
import Footer from "./Footer";

export const xlHorizontalPadding = "200px";
export const mdHorizontalPadding = "140px";

export default function Tokenomics() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <Box
      height="100%"
      maxHeight="100%"
      sx={{
        flex: 1,
        backgroundColor: "#441607",
        position: "relative",
      }}
    >
      <Stack
        ref={ref}
        direction="column"
        spacing={3}
        sx={{
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          animationName: isVisible ? "SlideUp" : undefined,
          animationDuration: "0.6s",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Stack flex={1} justifyContent="space-evenly">
          <WhiteContainer
            direction="column"
            paddingX={3}
            paddingY={1}
            alignItems="center"
          >
            <Typography variant="h4">Friends</Typography>
            <Typography variant="h6">Dwarf friendly projects</Typography>
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
        <Footer />
      </Stack>
    </Box>
  );
}
