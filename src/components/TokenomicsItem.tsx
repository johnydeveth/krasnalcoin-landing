import { Box, Stack, Tooltip, Typography } from "@mui/material";

export default function TokenomicsItem({
  img,
  text,
  tooltip,
  round,
  url,
}: {
  img: string;
  text?: string;
  tooltip?: string;
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
      {text && <Typography variant="body1">{text}</Typography>}
    </Stack>
  );

  return tooltip ? <Tooltip title={tooltip || ""}>{content}</Tooltip> : content;
}
