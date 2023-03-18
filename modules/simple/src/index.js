import Simple from "./components/Simple";
import reducers from "./reducer";
import middleware from "./middleware";
import saga from "./saga";
import "./styles/index.css";

import { registerModule } from "@lastui/rocker/platform";

registerModule({
  component: Simple,
  reducers,
  middleware,
  saga,
});
