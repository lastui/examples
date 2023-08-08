import ReactDOM from "react-dom/client";

import { Main } from "@lastui/rocker/bootstrap";

import { getContext } from "./service";

import "bulma/css/bulma.css";

let root = null;

const main = <Main fetchContext={getContext} contextRefreshInterval={60 * 1000} defaultLocale="cs-CZ" />;

function mountUnmount(exists) {
  if (root && !exists) {
    console.warn("mount node removed");
    root.unmount();
    root = null;
  } else if (!root && exists) {
    console.warn("mount node added");
    root = ReactDOM.createRoot(document.getElementById("mount"));
    root.render(main);
  }
}

let detachedNodeMitigationTimer = null;

function registerObserver() {
  console.log("reregistering observer to free detached nodes");
  observer.disconnect();
  observer.observe(document.body, { subtree: true, childList: true, attributes: false });
}

const observer = new MutationObserver(function (mutations) {
  let somethingHappened = false;
  mutations.forEach((mutation) => {
    const wasAdded = (mutation.addedNodes ?? [])[0]?.id === "mount";
    const wasRemoved = (mutation.removedNodes ?? [])[0]?.id === "mount";
    if (wasAdded) {
      somethingHappened = true;
      mountUnmount(true);
    }
    if (wasRemoved) {
      somethingHappened = true;
      mountUnmount(false);
    }
  });
  if (somethingHappened) {
    if (detachedNodeMitigationTimer) {
      clearTimeout(detachedNodeMitigationTimer);
    }
    detachedNodeMitigationTimer = setTimeout(registerObserver, 1000);
  }
});

observer.observe(document.body, { subtree: true, childList: true, attributes: false });

mountUnmount(Boolean(document.getElementById("mount")));
