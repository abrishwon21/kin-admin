import Home from "./Pages/Home/Home";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import { productInputs, userInputs } from "./formSource";
import New from "./Pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />


            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            
            
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
