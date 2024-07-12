import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../layout';
import MainPage from '../../pages/main';
import ErrorPage from '../../pages/error';
import LoginPage from '../../pages/login';
import OfferPage from '../../pages/offer';
import FavoritesPage from '../../pages/favorites';

import PrivateRoute from '../private-route';
import { AppRoute, AuthorizationStatus } from '../../constants';

type AppsParams = {
  offers: number;
};

export default function App({ offers }: AppsParams): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage offers={offers} />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<OfferPage />} />
          </Route>
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Error} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
