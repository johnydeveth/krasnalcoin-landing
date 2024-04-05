import { Box, Stack } from "@mui/material";
import Background from "../assets/background_bottom.png";
import Description from "../components/Description";
import MultichainData from "../components/MultichainData";
import TokenomicsData from "../components/TokenomicsData";
import VisibleAnimation from "../components/VisibleAnimation";
import WhiteContainer from "../components/WhiteContainer";

export const xlHorizontalPadding = "200px";
export const mdHorizontalPadding = "140px";

export default function Tokenomics() {
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
        <VisibleAnimation>
          <Stack direction="column" spacing={3}>
            <TokenomicsData />
            <MultichainData />
          </Stack>
        </VisibleAnimation>
        <VisibleAnimation>
          <WhiteContainer
            sx={{
              width: "425px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingY: "50px",
            }}
          >
            <Description />
          </WhiteContainer>
        </VisibleAnimation>
      </Stack>
    </Box>
  );
}
