import Crashing from "./components/Crashing";
import Fallback from "./components/Fallback";

import { registerModule } from "@lastui/rocker/platform";

registerModule({
  Main: Crashing,
  Error: Fallback,
});