export interface Activity {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  type: 'hiking' | 'climbing' | 'trail-running' | 'camping' | 'kitesurfing' | 'kayaking' | 'caving' | 'biking';
  location: string;
  region: string;
  duration: string;
  distance?: string;
  elevation?: string;
  bestSeason: string[];
  imageUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FeaturedDestination {
  id: string;
  name: string;
  description: string;
  location: string;
  imageUrl: string;
  activities: string[];
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  registrationUrl?: string;
  type: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  location?: string;
  avatar?: string;
  preferences?: {
    activities: string[];
    difficulty: string[];
    notifications: boolean;
  };
  completedActivities?: string[];
  plannedActivities?: string[];
}

export interface Review {
  id: string;
  activityId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}