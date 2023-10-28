import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataProposal } from "./getKonten.js";

get(
  "https://intern-monitoring.github.io/proposal/js/data.json",
  isiDataProposal
);
