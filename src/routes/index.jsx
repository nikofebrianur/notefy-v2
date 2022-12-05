import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import RouteMiddleware from '../middlewares/RouteMiddleware';

import IndexPage from '../pages';
import ArchivesPage from '../pages/ArchivesPage';
import IdNoteMainPage from '../pages/notes/IdNoteMainPage';
import NewNotePage from '../pages/notes/NewNotePage';
import IdEditNotePage from '../pages/notes/IdEditNotePage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: (
        <RouteMiddleware middleware='auth'>
          <IndexPage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/register',
      element: (
        <RouteMiddleware middleware='public'>
          <RegisterPage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/login',
      element: (
        <RouteMiddleware middleware='public'>
          <LoginPage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/archives',
      element: (
        <RouteMiddleware middleware='auth'>
          <ArchivesPage to='/' replace />
        </RouteMiddleware>
      ),
    },
    {
      path: '/notes',
      element: (
        <RouteMiddleware middleware='auth'>
          <Navigate to='/' replace />
        </RouteMiddleware>
      ),
    },
    {
      path: '/notes/new',
      element: (
        <RouteMiddleware middleware='auth'>
          <NewNotePage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/notes/:id',
      element: (
        <RouteMiddleware middleware='auth'>
          <IdNoteMainPage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/notes/:id/edit',
      element: (
        <RouteMiddleware middleware='auth'>
          <IdEditNotePage />
        </RouteMiddleware>
      ),
    },
    {
      path: '/*',
      element: (
        <RouteMiddleware middleware='auth'>
          <NotFoundPage />
        </RouteMiddleware>
      ),
    },
  ]);

export default Routes;
