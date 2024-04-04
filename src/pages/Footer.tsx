import { Box, Stack, StackProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import EiAi from "../assets/eiai.png";
import Gang from "../assets/gangkrasnali.png";
import Logo from "../assets/logo.png";
import OldLogo from "../assets/oldlogo.png";
import CustomDivider from "../components/CustomDivider";
import FriendItem from "../components/FriendItem";
import LinkList from "../components/LinkList";
import useIsSmallDevice from "../hooks/useIsSmallDevice";
import { participateItems, resourcesItems } from "../utils/constants";
import { mdHorizontalPadding, xlHorizontalPadding } from "../utils/theme";

export default function Footer(props: StackProps) {
  const isSmallDevice = useIsSmallDevice();
  const { t } = useTranslation();
  return (
    <Stack {...props}>
      <CustomDivider />
      <Stack
        py="60px"
        sx={{
          background: "radial-gradient(circle at center, #d9d9d9, #999999)",
        }}
        alignItems="center"
      >
        <Typography variant="h4" fontSize="34px">
          {t("friends.subtitle")}
        </Typography>
        <Stack
          direction={isSmallDevice ? "column" : "row"}
          justifyContent="space-evenly"
          spacing={5}
          paddingTop={3}
        >
          <FriendItem
            img={OldLogo}
            url="https://app.krasnalcoin.finance/"
            title="KrasnalCoin Finance"
          />
          <FriendItem
            img={EiAi}
            rounded
            url="https://ejaj.krasnalcoin.finance/"
            title="AYE-EYE"
          />
          <FriendItem
            img={Gang}
            rounded
            url="https://gangkrasnali.pl/"
            title="Gang Krasnali"
          />
        </Stack>
      </Stack>
      <CustomDivider />
      <Box
        position="relative"
        height={isSmallDevice ? 160 : 210}
        sx={{ backgroundColor: "#331a00" }}
      >
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
    </Stack>
  );
}
