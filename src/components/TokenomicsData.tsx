import { Stack, StackProps, Typography } from "@mui/material";
import Flame from "../assets/flame.png";
import Lock from "../assets/lock.png";
import Lp from "../assets/lp.png";
import useTokenInfo from "../hooks/useTokenInfo";
import TokenomicsItem from "./TokenomicsItem";
import WhiteContainer from "./WhiteContainer";

export default function TokenomicsData(props: StackProps) {
  const { burnedPercent, lpPercent, stakingPercent } = useTokenInfo();

  return (
    <WhiteContainer
      direction="column"
      paddingX={5}
      paddingY={2}
      alignItems="center"
      {...props}
    >
      <Typography variant="h4">Tokenomics</Typography>
      <Typography variant="h6">1 000 000 000 $KC</Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={5}
        paddingTop={3}
      >
        <TokenomicsItem img={Flame} text={`${burnedPercent}% Burned`} />
        <TokenomicsItem img={Lock} text={`${stakingPercent}% Locked`} />
        <TokenomicsItem img={Lp} text={`${lpPercent}% LP`} />
      </Stack>
    </WhiteContainer>
  );
}
