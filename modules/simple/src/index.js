import registerModule from "@lastui/rocker/register";

import Simple from "./components/Simple";
import middleware from "./middleware";
import reducers from "./reducer";
import saga from "./saga";
import "./styles/index.css";

registerModule({
  component: Simple,
  reducers,
  middleware,
  saga,
});
