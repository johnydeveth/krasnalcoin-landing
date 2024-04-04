import { Stack, StackProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Base from "../assets/base.png";
import Polygon from "../assets/polygon.png";
import useTokenInfo from "../hooks/useTokenInfo";
import { DWF_TOKEN_ADDRESS, KC_TOKEN_ADDRESS } from "../utils/web3";
import TokenomicsItem from "./TokenomicsItem";
import WhiteContainer from "./WhiteContainer";

export default function MultichainData(props: StackProps) {
  const { t } = useTranslation();
  const { dwfPercent, kcPercent } = useTokenInfo();

  return (
    <WhiteContainer
      direction="column"
      paddingX={5}
      paddingY={2}
      alignItems="center"
      {...props}
    >
      <Typography variant="h4">{t("multichain.title")}</Typography>
      <Typography variant="h6" textAlign="center">
        <b>$DWF</b>&nbsp;
        {t("multichain.subtitle0")}
        <b>$KC</b>&nbsp;
        {t("multichain.subtitle1")}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={5}
        paddingTop={3}
      >
        <TokenomicsItem
          img={Base}
          text={`${dwfPercent}% Base`}
          tooltip={DWF_TOKEN_ADDRESS}
          url={`https://basescan.org/token/${DWF_TOKEN_ADDRESS}`}
        />
        <TokenomicsItem
          img={Polygon}
          text={`${kcPercent}% Polygon`}
          tooltip={KC_TOKEN_ADDRESS}
          url={`https://polygonscan.com/token/${KC_TOKEN_ADDRESS}`}
        />
      </Stack>
    </WhiteContainer>
  );
}
