import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataIndex } from "./getKonten.js";

get("https://intern-monitoring.github.io/proposal/js/data.json", isiDataIndex);
