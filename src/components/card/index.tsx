import { Link } from 'react-router-dom';
import { OfferCard } from '../../types';
import { AppRoute } from '../../constants';

type CardProps = {
  data: OfferCard;
  setActiveCard: (id: number | null) => void;
};

export default function Card({ data, setActiveCard }: CardProps): JSX.Element {
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => setActiveCard(Number(data.id))}
      onMouseOut={() => setActiveCard(null)}
    >
      <div className="place-card__mark">
        {data.isPremium && <span>Premium</span>}
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${data.id}`}>
          <img
            className="place-card__image"
            src={data.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(data.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${data.id}`}>{data.title}</Link>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </article>
  );
}
