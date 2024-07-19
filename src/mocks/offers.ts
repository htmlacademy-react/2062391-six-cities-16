import { OfferCard } from '../types'

export const mocksData: OfferCard[] = [
  {
    id: '0',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg'
  },
    {
    id: '1',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 54.35514938496378,
        longitude: 5.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 54.35514938496378,
      longitude: 5.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage: 'img/room.jpg'
  },
 {
    id: '2',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 53.35514938496378,
        longitude: 4.873877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 53.35514938496378,
      longitude: 4.873877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: 'img/apartment-03.jpg'
  },
 {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Cologne',
      location: {
        latitude: 62.35514938496378,
        longitude: 6.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 62.35514938496378,
      longitude: 6.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/apartment-02.jpg'
  },
]
