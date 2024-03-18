import { Box } from "@mui/material";
import Background from "../assets/background_lower.png";
import Description from "../components/Description";

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
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: {
            xs: mdHorizontalPadding,
            xl: xlHorizontalPadding,
          },
          transform: "translate(0, -50%)",
          width: "425px",
          background: "rgba(255, 255, 255, 0.7)",
          boxShadow: "8px 8px 8px rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingY: "50px",
        }}
      >
        <Description />
      </Box>
    </Box>
  );
}
