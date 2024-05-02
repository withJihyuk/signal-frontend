import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/pages";
import Topbar from "./components/Topbar/pages";
import Ad from "./components/Ad/pages";
import Arrowtopbar from "./components/Arrowtopbar/pages";
import Login from "./Pages/Login/pages";
import Message from "./Pages/Message/pages";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <>
            <Arrowtopbar />
            <Login />
          </>
        }
      />
      <Route
        path="/m"
        element={
          <>
            <Topbar privacy={{ name: "지혁" }} />
            <Ad />
            <Message />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
    </Routes>
  );
}

export default App;
