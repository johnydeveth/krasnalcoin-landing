import { Box, BoxProps } from "@mui/material";

export default function HoverImage({
  src,
  focusSrc,
  width,
  height,
  sx,
  ...other
}: {
  src: string;
  focusSrc: string;
  width: number;
  height: number;
} & BoxProps) {
  return (
    <Box
      {...other}
      sx={{
        backgroundImage: `url(${src})`,
        width,
        height,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        transition: "all 0.2s ease-in 0s",
        ":hover": {
          backgroundImage: `url(${focusSrc})`,
        },
        ...sx,
      }}
    />
  );
}
