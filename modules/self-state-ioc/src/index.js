import Probe from "./components/Probe";
import reducer from "./reducer";

import { registerModule } from "@lastui/rocker/platform";

registerModule({
  Main: Probe,
  reducer,
});