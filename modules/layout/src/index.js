import Layout from "./components/Layout";

import { registerModule } from "@lastui/rocker/platform";

if (process.env.NODE_ENV === "development") {
  require("bulma/css/bulma.css");
}

registerModule({
  component: Layout,
});