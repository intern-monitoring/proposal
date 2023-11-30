import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataProposal } from "./getKonten.js";

get("js/data.json", isiDataProposal);
