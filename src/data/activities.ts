import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Fansipan Summit Trail',
    description: 'Scale Vietnam\'s highest peak through lush forests and breathtaking mountain landscapes. This challenging trek rewards hikers with panoramic views of the Hoang Lien Son mountain range.',
    difficulty: 'advanced',
    type: 'hiking',
    location: 'Sapa, Lao Cai Province',
    region: 'Northern Vietnam',
    duration: '2-3 days',
    distance: '19 km',
    elevation: '1,410m',
    bestSeason: ['September', 'October', 'November', 'March', 'April'],
    imageUrl: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
    coordinates: {
      lat: 22.3033,
      lng: 103.7736
    }
  },
  {
    id: '2',
    title: 'Ha Giang Loop',
    description: 'A breathtaking motorbike adventure through the northernmost province of Vietnam, featuring limestone karsts, terraced rice fields, and ethnic minority villages.',
    difficulty: 'intermediate',
    type: 'biking',
    location: 'Ha Giang Province',
    region: 'Northern Vietnam',
    duration: '3-5 days',
    distance: '350 km',
    bestSeason: ['September', 'October', 'November', 'March', 'April'],
    imageUrl: 'https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg',
    coordinates: {
      lat: 22.8031,
      lng: 104.9784
    }
  },
  {
    id: '3',
    title: 'Tu Lan Cave System',
    description: 'Explore the magnificent Tu Lan Cave System with its underwater rivers, massive chambers, and pristine jungle camps in a true adventure experience.',
    difficulty: 'intermediate',
    type: 'caving',
    location: 'Phong Nha, Quang Binh Province',
    region: 'Central Vietnam',
    duration: '1-3 days',
    bestSeason: ['February', 'March', 'April', 'May', 'June', 'July', 'August'],
    imageUrl: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg',
    coordinates: {
      lat: 17.6125,
      lng: 106.0801
    }
  },
  {
    id: '4',
    title: 'Cat Ba Rock Climbing',
    description: 'Test your skills on the limestone cliffs of Cat Ba Island with routes suitable for all levels from beginners to experienced climbers.',
    difficulty: 'intermediate',
    type: 'climbing',
    location: 'Cat Ba Island, Hai Phong',
    region: 'Northern Vietnam',
    duration: '1 day',
    bestSeason: ['October', 'November', 'December', 'January', 'February', 'March', 'April'],
    imageUrl: 'https://images.pexels.com/photos/163467/pexels-photo-163467.jpeg',
    coordinates: {
      lat: 20.7256,
      lng: 107.0483
    }
  },
  {
    id: '5',
    title: 'Vietnam Mountain Marathon',
    description: 'Join one of Asia\'s most beautiful trail running races through the stunning rice terraces and mountains of Sapa.',
    difficulty: 'expert',
    type: 'trail-running',
    location: 'Sapa, Lao Cai Province',
    region: 'Northern Vietnam',
    duration: '1 day',
    distance: '10-100 km',
    elevation: 'Up to 4,000m',
    bestSeason: ['September'],
    imageUrl: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg',
    coordinates: {
      lat: 22.3363,
      lng: 103.8438
    }
  },
  {
    id: '6',
    title: 'Mui Ne Kitesurfing',
    description: 'Ride the consistent winds of Mui Ne, one of Asia\'s premier kitesurfing destinations with perfect conditions for beginners and pros.',
    difficulty: 'beginner',
    type: 'kitesurfing',
    location: 'Mui Ne, Binh Thuan Province',
    region: 'Southern Vietnam',
    duration: 'Half day - Multiple days',
    bestSeason: ['November', 'December', 'January', 'February', 'March'],
    imageUrl: 'https://images.pexels.com/photos/1604661/pexels-photo-1604661.jpeg',
    coordinates: {
      lat: 10.9330,
      lng: 108.2618
    }
  }
];