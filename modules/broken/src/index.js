import registerModule from "@lastui/rocker/register";

import Crashing from "./components/Crashing";
import Fallback from "./components/Fallback";

registerModule({
  component: Crashing,
  fallback: Fallback,
});
