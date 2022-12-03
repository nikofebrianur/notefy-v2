import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "./pages/index";
import NotFoundMessage from "./pages/not-found";
import ArchivesPage from './pages/archives'
import NavMenu from "./components/layout/NavMenu";

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
		  <Route path="*" element={<NotFoundMessage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
