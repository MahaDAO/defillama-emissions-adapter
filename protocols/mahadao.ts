import { manualCliff, manualLinear } from "../adapters/manual";
import { Protocol } from "../types/adapters";
import { periodToSeconds } from "../utils/time";

const start = 1608422400;
const totalQty = 10000000;

const maha: Protocol = {
  "Ecosystem Growth": manualCliff(start, totalQty * 0.12),
  "Treasury / Grants / Partnerships / Bug Bounties": manualCliff(
    1608426000,
    totalQty * 0.05
  ),
  "Core Team": [
    manualCliff(1608422400, totalQty * 0.1),
    manualLinear(1608422400, 1639958400, totalQty * 0.1),
  ],
  "Private Investors": [
    manualCliff(1608422400, totalQty * 12 * 0.02),
    manualLinear(
      start,
      start + periodToSeconds.month * 6,
      totalQty * 0.12 * 0.05
    ),
    manualLinear(
      start + periodToSeconds.month * 6,
      start + periodToSeconds.year,
      totalQty * 0.12 * 0.05
    ),
  ],
  meta: {
    sources: ["https://docs.mahadao.com/the-maha-token/distribution"],
    token: "ethereum:0x745407c86df8db893011912d3ab28e68b62e49b0",
    protocolIds: ["1475", "2360"],
  },
  sections: {
    insiders: ["Private Investors", "Team / Founders / Early Project Members"],
    noncirculating: ["Treasury / Grants / Partnerships / Bug Bounties"],
    farming: ["Community"],
  },
};

export default maha;
