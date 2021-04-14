import React from "react";
import { Route, Link } from "react-router-dom";
import Homepage from "./components/pages/homepage/homepage.component";

const Hats = () => {
  return <div>hats page</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={Hats} />
    </div>
  );
}
export default App;
