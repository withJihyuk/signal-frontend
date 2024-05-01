import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home></Home>
          </>
        }
      />
    </Routes>
  );
}

export default App;
