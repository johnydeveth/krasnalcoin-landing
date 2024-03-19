import { Stack, StackProps } from "@mui/material";
import useIsSmallDevice from "../hooks/useIsSmallDevice";

export default function WhiteContainer({ children, sx, ...other }: StackProps) {
  const smallDevice = useIsSmallDevice();

  return (
    <Stack
      sx={{
        background: "rgba(255, 255, 255, 0.7)",
        boxShadow: "4px 4px 8px rgba(255, 255, 255, 0.2)",
        borderRadius: smallDevice ? "0px" : "20px",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}
