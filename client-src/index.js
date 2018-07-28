import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const App = () => {
  <div className="container">
    <div className="col-md-12">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
