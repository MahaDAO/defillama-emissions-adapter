import { Protocol } from "../types/adapters";
import { manualCliff, manualStep } from "../adapters/manual";
import { periodToSeconds } from "../utils/time";

const totalQty = 1000000000;
const start = 1647475200;

const steps = (percentage: number) =>
  manualStep(
    start + periodToSeconds.year,
    periodToSeconds.month,
    36,
    totalQty * percentage / 36,
  );

const apecoin: Protocol = {
  "ecosystem fund": [
    manualCliff(start, totalQty * 0.2675),
    manualStep(start, periodToSeconds.month, 48, totalQty * 0.3525 / 48),
  ],
  "yuga labs": steps(0.15),
  "Jane Goodall Legacy Foundation": steps(0.01),
  "launch contributors": [
    manualCliff(start, totalQty * 0.01),
    manualCliff(start + periodToSeconds.month * 6, totalQty * 0.025),
    manualCliff(start + periodToSeconds.month * 12, totalQty * 0.025),
    manualCliff(start + periodToSeconds.month * 18, totalQty * 0.025),
    steps(0.03),
    manualStep(
      start + periodToSeconds.year,
      periodToSeconds.month,
      33,
      totalQty * 0.025 / 33,
    ),
  ],
  founders: steps(0.08),
  meta: {
    sources: ["https://apecoin.com/about"],
    token: "ethereum:0x4d224452801aced8b2f0aebe155379bb5d594381",
    protocolIds: ["2665"],
  },
  sections: {
    noncirculating: ["ecosystem fund"],
    insiders: [
      "yuga labs",
      "Jane Goodall Legacy Foundation",
      "launch contributors",
      "founders",
    ],
  },
};
export default apecoin;
