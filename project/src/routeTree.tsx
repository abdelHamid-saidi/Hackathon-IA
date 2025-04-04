import React from 'react';
import { createRootRoute, createRoute } from '@tanstack/react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import CommunityPage from './pages/CommunityPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const challengesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/defis',
  component: ChallengesPage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/communaute',
  component: CommunityPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/a-propos',
  component: AboutPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/evenements',
  component: EventsPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/connexion',
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/inscription',
  component: RegisterPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  challengesRoute,
  communityRoute,
  aboutRoute,
  blogRoute,
  eventsRoute,
  loginRoute,
  registerRoute,
]);