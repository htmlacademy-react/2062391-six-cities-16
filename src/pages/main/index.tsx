import { Link } from 'react-router-dom';

import Card from '../../components/card';

import { City, SortingTypes } from '../../constants';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  offers: number;
};

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(City).map((city) => (
                <li className={'locations__item'} key={city}>
                  <Link className="locations__item-link tabs__item" to="/">
                    <span>{city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {SortingTypes.map((sortType) => (
                    <li className="places__option" key={sortType} tabIndex={0}>
                      {sortType}
                    </li>
                  ))}
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
