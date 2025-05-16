import {
  Box,
  IconButton,
  Link,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DiscordIcon from "../assets/discord-logo.png";
import CommunityIcon from "../assets/team_community.png";
import FatherIcon from "../assets/team_father.png";
import GrafIcon from "../assets/team_graf.jpg";
import TelegramIcon from "../assets/telegram-logo.png";
import TwitterIcon from "../assets/twitter-logo.png";
import TokenomicsItem from "./TokenomicsItem";
import WhiteContainer from "./WhiteContainer";

export default function TeamData(props: StackProps) {
  const { t } = useTranslation();

  return (
    <WhiteContainer
      direction="column"
      paddingX={5}
      paddingY={2}
      alignItems="center"
      {...props}
    >
      <Typography variant="h4">{t("team.title")}</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={3}
        paddingTop={3}
      >
        <TokenomicsItem
          img={GrafIcon}
          text={t("team.graf")}
          subText={t("team.grafDescr")}
          circle
          url="https://twitter.com/CezaryGraf"
        />
        <TokenomicsItem
          img={CommunityIcon}
          text={t("team.community")}
          subText={t("team.communityDescr")}
          tooltip={
            <Stack spacing={1} direction="row">
              <IconButton
                component={Link}
                href="https://x.com/krasnal_coin"
                target="_blank"
              >
                <Box component="img" src={TwitterIcon} height={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://t.me/krasnalcoin_official"
                target="_blank"
              >
                <Box component="img" src={TelegramIcon} height={24} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://discord.com/invite/JM4TezBp7M"
                target="_blank"
              >
                <Box component="img" src={DiscordIcon} height={24} />
              </IconButton>
            </Stack>
          }
          circle
          url="https://x.com/krasnal_coin"
        />
        <TokenomicsItem
          img={FatherIcon}
          text={t("team.father")}
          subText={t("team.fatherDescr")}
          circle
        />
      </Stack>
    </WhiteContainer>
  );
}
