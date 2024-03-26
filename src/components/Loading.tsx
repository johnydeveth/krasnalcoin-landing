import { Box, BoxProps, Stack, Typography } from "@mui/material";
import "../utils/loaders.css";
import { useTranslation } from "react-i18next";

export default function Loading(props: BoxProps) {
  const {t } = useTranslation();
  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        animationName: "fadeIn",
        animationDuration: "1s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...props}
    >
      <Stack spacing={2} alignItems="center">
        <div className="sk-bounce">
          <div className="sk-bounce-dot"></div>
          <div className="sk-bounce-dot"></div>
        </div>
        <Typography variant="h5" color="white">
          {t("loading")}
        </Typography>
      </Stack>
    </Box>
  );
}
