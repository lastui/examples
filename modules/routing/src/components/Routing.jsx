import React from "react";

import { useNavigation, useLoaderData } from "react-router-dom";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Module } from "@lastui/rocker/platform";

const A = (props) => <div>A</div>;


const C = (props) => {
  const data = useLoaderData();
  console.log('loader data in C', data);
  return <div>C</div>
};

const B = (props) => (
  <React.Fragment>
    <div>B</div>
    <Module name="subrouting" />
  </React.Fragment>
);

const Routing = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  React.useEffect(() => {
    console.log('nagivation happened', navigation.state, 'to', navigation.location)
  }, [navigation.state, navigation.location]);

  return (
    <div>
      Module routing here
      <Routes>
        <Route path="b/*" element={<B />} />
        <Route path="*" element={<A />} />
        <Route
          path="/c/:id"
          element={<C />} 
          loader={async ({ params }) => {
            console.log('C is loading', params)
            return new Promise((resolve) => {
              setTimeout(() => {
                console.log('C has loaded')
                const data = { id: params.id };
                const response = new Response(JSON.stringify(data), {
                  status: 200,
                  headers: {
                    "Content-Type": "application/json; utf-8",
                  },
                });
                resolve(response);
              }, 1000)
            })
          }}
        />
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
        <Link to="/c/42">nav /c/42</Link>
      </div>
      <div>
        <Link to="/">nav /</Link>
      </div>
    </div>
  );
};

export default Routing;
