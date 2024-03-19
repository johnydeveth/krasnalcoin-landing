import { Box, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Background from "../assets/background_bottom_mobile_1.png";
import Description from "../components/Description";
import WhiteContainer from "../components/WhiteContainer";
import useOnScreen from "../hooks/useOnScreen";
import usePrevious from "../hooks/usePrevious";

export const xlHorizontalPadding = "200px";
export const mdHorizontalPadding = "140px";

export default function Tokenomics() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [alreadyShown, setAlreadyShown] = useState(false);
  const previousVisible = usePrevious(isVisible);
  useEffect(() => {
    if (previousVisible && !isVisible) {
      setAlreadyShown(true);
    }
  }, [isVisible, previousVisible, setAlreadyShown]);
  return (
    <Stack
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
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          top: "80px",
          height: 50,
        }}
      />
      <Stack
        direction="column"
        spacing={3}
        sx={{
          position: "absolute",
          bottom: "30px",
          left: 0,
          right: 0,
          animationName: isVisible && !alreadyShown ? "SlideUp" : undefined,
          animationDuration: "0.6s",
          opacity: isVisible || alreadyShown ? 1 : 0,
        }}
      >
        <WhiteContainer
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "20px",
          }}
        >
          <Description />
        </WhiteContainer>
      </Stack>
    </Stack>
  );
}
