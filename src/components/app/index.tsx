import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from '../layout';
import MainPage from '../../pages/main';
import ErrorPage from '../../pages/error';
import LoginPage from '../../pages/login';
import OfferPage from '../../pages/offer';
import FavoritesPage from '../../pages/favorites';

import ScrollToTop from '../scroll-to-top';
import PrivateRoute from '../private-route';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { OfferCard } from '../../types';

type AppsParams = {
  offersNumber: number;
  data: OfferCard[];
};

export default function App({ offersNumber, data }: AppsParams): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route
              index
              element={<MainPage offersNumber={offersNumber} data={data} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage
                    data={data.filter((offer) => offer.isFavorite === true)}
                  />
                </PrivateRoute>
              }
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
          </Route>
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Error} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
