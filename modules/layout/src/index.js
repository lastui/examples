import { registerModule } from "@lastui/rocker/platform";

import Layout from "./components/Layout";

if (process.env.NODE_ENV === "development") {
  require("bulma/css/bulma.css");
}

registerModule({
  component: Layout,
});
