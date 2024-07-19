import { Good, City } from './constants';

export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'hotel' | 'room' | 'house';
  price: number;
  city: {
    name: keyof typeof City;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: keyof typeof Good[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export type OfferCard = Omit<Offer, 'description' | 'bedrooms' | 'goods' | 'host' | 'images' | 'maxAdults'>

export type Comment = {
  id: string;
  date: string;
  user: User
  comment: string;
  rating: number;
}

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Response = User & {
  email: string;
  token: string;
}

export type Request = {
  email: string;
  password: string;
}
