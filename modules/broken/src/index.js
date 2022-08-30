import Crashing from "./components/Crashing";
import Fallback from "./components/Fallback";

import { registerModule } from "@lastui/rocker/platform";

registerModule({
  component: Crashing,
  fallback: Fallback,
});