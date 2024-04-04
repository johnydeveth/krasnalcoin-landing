import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import Background from "../assets/background_bottom.png";
import Description from "../components/Description";
import MultichainData from "../components/MultichainData";
import TokenomicsData from "../components/TokenomicsData";
import WhiteContainer from "../components/WhiteContainer";
import useOnScreen from "../hooks/useOnScreen";

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
          <TokenomicsData />
          <MultichainData />
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
