import { Box, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

export default function TokenomicsItem({
  img,
  text,
  subText,
  tooltip,
  round,
  circle,
  url,
}: {
  img: string;
  text?: string;
  subText?: string;
  tooltip?: React.ReactNode;
  round?: boolean;
  circle?: boolean;
  url?: string;
}) {
  const image = (
    <Box
      component="img"
      src={img}
      alt={text}
      height={60}
      sx={{
        borderRadius: round ? 4 : circle ? 20 : 0,
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
        <Box
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          height={60}
        >
          {image}
        </Box>
      ) : (
        image
      )}
      <Stack spacing={1}>
        {text && (
          <Typography variant="body1" textAlign="center">
            {text}
          </Typography>
        )}
        {subText && (
          <Typography variant="body2" textAlign="center">
            {subText}
          </Typography>
        )}
      </Stack>
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
