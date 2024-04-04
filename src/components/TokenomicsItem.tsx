import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

export default function TokenomicsItem({
  img,
  text,
  tooltip,
  round,
  url,
}: {
  img: string;
  text?: string;
  tooltip?: React.ReactNode;
  round?: boolean;
  url?: string;
}) {
  const image = (
    <Box
      component="img"
      src={img}
      height={60}
      sx={{
        borderRadius: round ? 4 : 0,
        transition: "transform 0.3s ease-in-out",
        ":hover": {
          transform: "scale(1.1)",
        },
      }}
    />
  );
  const content = (
    <Stack alignItems="center" spacing={1}>
      {url ? (
        <Box component="a" href={url} target="_blank" rel="noopener noreferrer">
          {image}
        </Box>
      ) : (
        image
      )}
      {text && (
        <Typography variant="body1" textAlign="center">
          {text}
        </Typography>
      )}
    </Stack>
  );

  return tooltip ? (
    <Tooltip title={<Typography variant="body1">{tooltip || ""}</Typography>}>
      {content}
    </Tooltip>
  ) : (
    content
  );
}
