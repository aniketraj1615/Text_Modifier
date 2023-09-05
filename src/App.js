
import "./App.css";
import Navbar from "./Components/Navbar";
import Textutiles from "./Components/Textutiles";
import Aboutpage from "./Components/Aboutpage";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#9a9a9a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>

      <BrowserRouter>
        <Navbar title={"TextHelp"} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Textutiles showAlert={showAlert} heading={"Enter your text here"} />}
            />

            <Route exact path="/Aboutpage" element={<Aboutpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
