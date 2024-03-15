import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
function App(){
  return(
    <div>
        <Header />
        <Home />
        
    </div>
  )
}
export default App;