import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaperPresentation from "./Events/PaperPresentation";
import Innovata from "./Events/Innovata";
import QuizMaster from "./Events/QuizMaster";
import DebugaPalooza from "./Events/DebugaPalooza";
import SightOnSite from "./Events/SightOnSite";
import TechPuzzle from "./Events/TechPuzzle";
import Event from "./event";
import Details from "./details";
import JustImagine from "./Events/JustImagine";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route
          exact
          path="/paperpresentation"
          element={<PaperPresentation />}
        />

        <Route exact path="/debugapalooza" element={<DebugaPalooza />} />
        <Route exact path="/quizmaster" element={<QuizMaster />} />
        <Route exact path="/sightonsite" element={<SightOnSite />} />
        <Route exact path="/techpuzzle" element={<TechPuzzle />} />
        <Route exact path="/innovata" element={<Innovata />} />
        <Route exact path="/justimagine" element={<JustImagine />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
