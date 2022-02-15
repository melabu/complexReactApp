import React from "react";
import ReactDOM from "react-dom";

//My Components
import Header from "./Components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

function ExampleComponent() {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  );
}

ReactDOM.render(<ExampleComponent />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
