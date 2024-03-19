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
  const result = useReadContracts({
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
    ],
  });
  const totalSupply = result.data?.[0]?.result as bigint | undefined;
  const lpBalance = result.data?.[1]?.result as bigint | undefined;
  const staking1Balance = result.data?.[2]?.result as bigint | undefined;
  const staking2Balance = result.data?.[3]?.result as bigint | undefined;

  const burnedAmount = totalSupply
    ? BigInt("1000000000000000") - totalSupply
    : undefined;
  const burnedPercent = parsePercent(
    burnedAmount && totalSupply
      ? (BigInt(10000) * burnedAmount) / totalSupply
      : undefined
  );
  const lpPercent = parsePercent(
    lpBalance && totalSupply
      ? (BigInt(10000) * lpBalance) / totalSupply
      : undefined
  );
  const stakingPercent = parsePercent(
    staking1Balance && staking2Balance && totalSupply
      ? (BigInt(10000) * (staking1Balance + staking2Balance)) / totalSupply
      : undefined
  );
  return {
    burnedPercent,
    lpPercent,
    stakingPercent,
  };
}
