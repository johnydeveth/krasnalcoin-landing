import { polygon } from "viem/chains";
import { useReadContracts } from "wagmi";
import kc from "../utils/abi/kc";
import { KC_TOKEN_ADDRESS } from "../utils/web3";

const kcContract = {
  address: KC_TOKEN_ADDRESS,
  abi: kc,
  chainId: polygon.id,
} as const;

const parsePercent = (value: bigint | undefined) => {
  if (!value) {
    return value;
  }
  return parseInt(value.toString()) / 100;
};

export default function useTokenInfo() {
  const kcResult = useReadContracts({
    contracts: [
      { ...kcContract, functionName: "totalSupply" },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0x6E76fcb1E64D441B75721021f6b8e4Fc1B41F65b"],
      },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0xA98e71B42eAddBD85FA29d5510e6D31C22776427"],
      },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0x9268054Cd46629C90d6E642160cf3e14cdAe87cD"],
      },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0x9310FF367B83026982282d371c741E193aCeAf3B"],
      },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0x9ecd3cfd06535d9e9558654549e8a8518f85758d"],
      },
      {
        ...kcContract,
        functionName: "balanceOf",
        args: ["0x5D46ba963C9190e249DD99976519725f09E8A636"],
      },
    ],
  });
  const totalSupply = kcResult.data?.[0]?.result as bigint | undefined;
  const lpBalance = kcResult.data?.[1]?.result as bigint | undefined;
  const staking1Balance = kcResult.data?.[2]?.result as bigint | undefined;
  const staking2Balance = kcResult.data?.[3]?.result as bigint | undefined;
  const staking3Balance = kcResult.data?.[4]?.result as bigint | undefined;
  const treasuryBalance = kcResult.data?.[5]?.result as bigint | undefined;

  const burnedAmount = totalSupply
    ? BigInt("1000000000000000") - totalSupply
    : undefined;
  const burnedPercent = parsePercent(
    burnedAmount && totalSupply
      ? (BigInt(10000) * burnedAmount) / totalSupply
      : undefined
  );
  const kcLpPercent = parsePercent(
    lpBalance && totalSupply
      ? (BigInt(10000) * lpBalance) / totalSupply
      : undefined
  );
  const stakingPercent = parsePercent(
    staking1Balance && staking2Balance && staking3Balance && treasuryBalance && totalSupply
      ? (BigInt(10000) * (staking1Balance + staking2Balance + staking3Balance + treasuryBalance)) / totalSupply
      : undefined
  );

  const lpPercent = parsePercent(
    lpBalance && totalSupply
      ? (BigInt(10000) * (lpBalance)) / totalSupply
      : undefined
  );

  return {
    burnedPercent,
    kcLpPercent,
    lpPercent,
    stakingPercent,
  };
}
