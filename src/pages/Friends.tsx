import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import EiAi from "../assets/eiai.png";
import Gang from "../assets/gangkrasnali.png";
import OldLogo from "../assets/oldlogo.png";
import FriendItem from "../components/FriendItem";
import useIsSmallDevice from "../hooks/useIsSmallDevice";
import VisibleAnimation from "../components/VisibleAnimation";

export default function Friends() {
  const { t } = useTranslation();
  const isSmallDevice = useIsSmallDevice();
  return (
    <Stack py="60px" width="100%" alignItems="center">
      <VisibleAnimation>
        <Typography variant="h4" fontSize="34px">
          {t("friends.subtitle")}
        </Typography>
      </VisibleAnimation>
      <Stack
        flex={1}
        direction={isSmallDevice ? "column" : "row"}
        justifyContent="space-evenly"
        spacing={5}
        paddingTop={3}
      >
        <VisibleAnimation>
          <FriendItem
            img={OldLogo}
            url="https://app.krasnalcoin.finance/"
            title="KrasnalCoin Finance"
          />
        </VisibleAnimation>
        <VisibleAnimation>
          <FriendItem
            img={EiAi}
            rounded
            url="https://ejaj.krasnalcoin.finance/"
            title="AYE-EYE"
          />
        </VisibleAnimation>
        <VisibleAnimation>
          <FriendItem
            img={Gang}
            rounded
            url="https://gangkrasnali.pl/"
            title="Gang Krasnali"
          />
        </VisibleAnimation>
      </Stack>
    </Stack>
  );
}
