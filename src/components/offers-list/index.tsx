import { OfferCard } from '../../types';
import Card from '../card';

type OffersListProps = {
  data: OfferCard[];
  setActiveCard: (id: number | null) => void;
};

export default function OffersList({
  data,
  setActiveCard,
}: OffersListProps): JSX.Element[] {
  return data.map((offer) => {
    return <Card data={offer} key={offer.id} setActiveCard={setActiveCard} />;
  });
}
