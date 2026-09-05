import { createConfig, http } from "wagmi";
import { base, polygon } from "wagmi/chains";

export const KC_TOKEN_ADDRESS = "0x784665471bB8B945b57A76a9200B109Ee214E789";

export const DWF_TOKEN_ADDRESS = "0xcb6A72D1Ca3b46fC4CA35ED7d3379E51435D5F52";

// Polygon's former default public endpoint (polygon-rpc.com) now requires
// authorization. dRPC is a free, unauthenticated public Polygon endpoint.
const POLYGON_RPC_URL = "https://polygon.drpc.org";

export const config = createConfig({
  chains: [polygon, base],
  transports: {
    [polygon.id]: http(POLYGON_RPC_URL),
    [base.id]: http(),
  },
});
