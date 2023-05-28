import React from "react";

const Crashing = () => {
  throw new Error("I crashed badly but locally");
};

export default Crashing;
