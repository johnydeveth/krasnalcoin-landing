import { Box, Stack, StackProps } from "@mui/material";
import Logo from "../assets/logo.png";
import CustomDivider from "../components/CustomDivider";
import LinkList from "../components/LinkList";
import useIsSmallDevice from "../hooks/useIsSmallDevice";
import { participateItems, resourcesItems } from "../utils/constants";
import { mdHorizontalPadding, xlHorizontalPadding } from "../utils/theme";
import { useTranslation } from "react-i18next";

export default function Footer(props: StackProps) {
  const isSmallDevice = useIsSmallDevice();
  const { t } = useTranslation();
  return (
    <Stack
      direction="column"
      height={isSmallDevice ? 160 : 210}
      sx={{ backgroundColor: "#331a00" }}
      {...props}
    >
      <CustomDivider />
      <Box position="relative" flex={1}>
        <Box
          component="img"
          src={Logo}
          position="absolute"
          top={{ xs: "16px", md: "54px" }}
          left={{ xs: "23px", md: "224px" }}
          sx={{
            width: 64,
          }}
        />
        <Stack
          direction="row"
          spacing={{ xs: 5, md: 16 }}
          position="absolute"
          sx={{
            right: {
              xs: "16px",
              md: mdHorizontalPadding,
              xl: xlHorizontalPadding,
            },
            top: "50%",
            transform: "translate(0, -50%)",
          }}
        >
          <LinkList title={t("footer.resources")} items={resourcesItems} />
          <LinkList title={t("footer.participate")} items={participateItems} />
        </Stack>
      </Box>
      <CustomDivider />
    </Stack>
  );
}
