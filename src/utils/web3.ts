import { createConfig, http } from "wagmi";
import { polygon } from "wagmi/chains";

export const KC_TOKEN_ADDRESS = "0x784665471bB8B945b57A76a9200B109Ee214E789";

export const config = createConfig({
  chains: [polygon],
  transports: {
    [polygon.id]: http(),
  },
});
