import { Box, Stack } from "@mui/material";
import { useRef } from "react";
import MultichainData from "../components/MultichainData";
import TokenomicsData from "../components/TokenomicsData";
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
          <MultichainData />
          <TokenomicsData />
        </Stack>
      </Stack>
    </Box>
  );
}
