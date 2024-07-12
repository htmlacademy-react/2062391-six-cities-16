export const AppRoute = {
  Login: '/login',
  Root: '/',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  Error: '*'
} as const;

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const SortingTypes = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rates first'
];

export const HotelType = {
  Apatrment: 'apartment',
  Room: 'room',
  House: 'house',
  Hotel: 'hotel'
} as const;

export enum Good {
  WiFi = 'Wi-Fi',
  WashingMachine = 'Washing machine',
  Towels = 'Towels',
  Heating = 'Heating',
  CoffeeMachine = 'Coffee machine',
  BabySeat = 'Baby seat',
  Kitchen = 'Kitchen',
  Dishwasher = 'Dishwasher',
  CabelTV = 'Cabel TV',
  Fridge = 'Fridge'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
