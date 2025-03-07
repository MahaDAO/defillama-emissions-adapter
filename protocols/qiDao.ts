import { manualCliff, manualLinear } from "../adapters/manual";
import { Protocol } from "../types/adapters";
import { periodToSeconds } from "../utils/time";

const start: number = 1619996400;
const qty: number = 200000000;

const qiDao: Protocol = {
  Community: [
    manualLinear(start, start + periodToSeconds.year, qty * 0.85 * 0.5),
    manualLinear(
      start + periodToSeconds.year,
      start + periodToSeconds.year * 2,
      qty * 0.85 * 0.3,
    ),
    manualLinear(
      start + periodToSeconds.year * 2,
      start + periodToSeconds.year * 3,
      qty * 0.85 * 0.2,
    ),
  ],
  "Strategic partners": manualLinear(
    start,
    start + periodToSeconds.month * 18,
    qty * 0.05,
  ),
  "Keeper incentives": manualLinear(
    start,
    start + periodToSeconds.year * 3,
    qty * 0.1,
  ),
  meta: {
    sources: ["https://docs.mai.finance/tokenomics-1/tokenomics"],
    token: "polygon:0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    protocolIds: ["449"],
  },
  sections: {
    insiders: ["Strategic partners"],
    farming: ["Keeper incentives"],
    noncirculating: ["Community"],
  },
};
export default qiDao;
