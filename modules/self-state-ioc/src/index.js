import Probe from "./components/Probe";
import reducers from "./reducer";

import { registerModule } from "@lastui/rocker/platform";

registerModule({
  component: Probe,
  reducers,
});
