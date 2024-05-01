import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/pages";
import Topbar from "./components/Topbar/pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Topbar privacy={{ name: "지혁" }} />
            <Home></Home>
          </>
        }
      />
    </Routes>
  );
}

export default App;
