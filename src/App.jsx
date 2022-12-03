import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "./pages/index";
import NotFoundMessage from "./pages/NotFoundPages";
import ArchivesPage from './pages/ArchivesPage'
import NavMenu from "./components/layout/NavMenu";
import IdNoteMainPage from './pages/notes/IdNoteMainPage'
import NewNotePage from "./pages/notes/NewNotePage";
import IdEditNotePage from "./pages/notes/IdEditNotePage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Notefy</Link>
        </h1>
        <NavMenu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes" element={<Navigate to="/" replace />} />
          <Route path="/notes/new" element={<NewNotePage />} />
		  <Route path="/notes/:id" element={<IdNoteMainPage />} />
		  <Route path="/notes/:id/edit" element={<IdEditNotePage />} />
		  <Route path="*" element={<NotFoundMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
