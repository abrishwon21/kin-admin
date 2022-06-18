import Home from "./Pages/Home/Home";
import List from "./Pages/list/List";
import TrackList from "./Pages/list/trackList";
import Single from "./Pages/single/Single";
import { albumInput, artistInput } from "./formSource";
import New from "./Pages/new/New";
import EditArtistForm from './Pages/new/EditArtistForm'
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
              <Route path=":id" element={<EditArtistForm />} />
              <Route
                path="new"
                element={<New inputs={artistInput} filetag="Profile" title="Add New User" />}
              />
            </Route>
            <Route path="track">
              <Route index element={<TrackList />} />
              <Route path=":trackId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={albumInput} filetag="Cover Image" title="Create Album" />}
              />
            </Route>
            <Route path="track">
              <Route index element={<trackList />} />
              <Route path=":trackId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={albumInput} filetag="Cover Image" title="Create Album" />}
              />
            </Route>
            
            
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
