import React from "react";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Module } from "@lastui/rocker/platform";

const A = (props) => <div>A</div>;

const B = (props) => (
  <React.Fragment>
    <div>B</div>
    <Module name="subrouting" />
  </React.Fragment>
);

const Routing = () => {
  const navigate = useNavigate();
  return (
    <div>
      Module routing here
      <Routes>
        <Route path="b/*" element={<B />} />
        <Route path="*" element={<A />} />
      </Routes>
      <div>
        <Link to="b">nav /b</Link>
      </div>
      <div>
        <a
          href="/never/should/happen"
          onClick={(e) => {
            e.preventDefault();
            navigate("/b/sub");
          }}>
          nav /b/sub
        </a>
      </div>
      <div>
        <Link to="/">nav /</Link>
      </div>
    </div>
  );
};

export default Routing;