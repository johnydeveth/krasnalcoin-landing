import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import EiAi from "../assets/eiai.png";
import Gang from "../assets/gangkrasnali.png";
import OldLogo from "../assets/oldlogo.png";
import Polmoon from "../assets/polmoon.jpg";
import FriendItem from "../components/FriendItem";
import VisibleAnimation from "../components/VisibleAnimation";
import useIsSmallDevice from "../hooks/useIsSmallDevice";

export default function Friends() {
  const { t } = useTranslation();
  const isSmallDevice = useIsSmallDevice();
  return (
    <Stack py={{ xs: "20px", md: "60px" }} width="100%" alignItems="center">
      <VisibleAnimation>
        <Typography variant="h4" fontSize="34px">
          {t("friends.subtitle")}
        </Typography>
      </VisibleAnimation>
      <Stack
        flex={1}
        direction={isSmallDevice ? "column" : "row"}
        justifyContent="space-evenly"
        spacing={{ xs: 2, md: 5 }}
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
        <VisibleAnimation>
          <FriendItem
            img={Polmoon}
            rounded
            url="https://x.com/Polmoon_LFG"
            title="Polmoon"
          />
        </VisibleAnimation>
      </Stack>
    </Stack>
  );
}
