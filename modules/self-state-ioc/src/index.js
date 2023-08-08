import { registerModule } from "@lastui/rocker/platform";

import Probe from "./components/Probe";
import reducers from "./reducer";

registerModule({
  component: Probe,
  reducers,
});
