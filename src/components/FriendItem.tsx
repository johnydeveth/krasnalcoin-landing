import { Box, Stack, Typography } from "@mui/material";

export default function FriendItem({
  img,
  rounded,
  url,
  title,
}: {
  img: string;
  rounded?: boolean;
  url: string;
  title: string;
}) {
  return (
    <Stack alignItems="center" spacing={1}>
      <Box
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          transition: "transform 0.3s ease-in-out",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          component="img"
          src={img}
          alt={title}
          height={{
            xs: 80,
            md: 100,
          }}
          sx={{ borderRadius: rounded ? "50%" : undefined }}
        />
      </Box>
      <Typography
        fontWeight={800}
        fontSize={20}
        whiteSpace="nowrap"
        overflow="clip"
      >
        {title}
      </Typography>
    </Stack>
  );
}
