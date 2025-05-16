import { Stack, StackProps, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import Flame from "../assets/flame.png";
import Lock from "../assets/lock.png";
import Lp from "../assets/lp.png";
import useTokenInfo from "../hooks/useTokenInfo";
import TokenomicsItem from "./TokenomicsItem";
import WhiteContainer from "./WhiteContainer";

export default function TokenomicsData(props: StackProps) {
  const { t } = useTranslation();
  const { burnedPercent, lpPercent, stakingPercent } = useTokenInfo();

  return (
    <WhiteContainer
      direction="column"
      paddingX={5}
      paddingY={2}
      alignItems="center"
      {...props}
    >
      <Typography variant="h4">{t("tokenomics.title")}</Typography>
      <Typography variant="h6">
        1 000 000 000 <b>$KC</b>
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={5}
        paddingTop={3}
      >
        <TokenomicsItem
          img={Flame}
          text={`${burnedPercent}% ${t("tokenomics.burned")}`}
          tooltip={t("tokenomics.burned.description")}
        />
        <TokenomicsItem
          img={Lock}
          text={`${stakingPercent}% ${t("tokenomics.locked")}`}
          tooltip={t("tokenomics.locked.description")}
        />
        <TokenomicsItem
          img={Lp}
          text={`${lpPercent}% LP`}
          tooltip={<Trans i18nKey={"tokenomics.lp.description"} />}
        />
      </Stack>
    </WhiteContainer>
  );
}
