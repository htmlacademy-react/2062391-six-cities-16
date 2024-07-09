import MainPage from '../pages/main';

type AppsParams = {
  offers: number;
};

export default function App({ offers }: AppsParams): JSX.Element {
  return <MainPage offers={offers} />;
}
