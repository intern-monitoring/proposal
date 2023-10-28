import { get } from "https://jscroot.github.io/api/croot.js";
import { isiDataTeam } from "./getKonten.js";

get("https://intern-monitoring.github.io/js/data.json", isiDataTeam);
