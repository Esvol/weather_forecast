import "./style/index.scss";

import { Routes, Route } from "react-router-dom";

import Weather from "./components/Weather";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
