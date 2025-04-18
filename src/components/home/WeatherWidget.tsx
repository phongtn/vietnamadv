import React, { useState } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import { useTranslation } from 'react-i18next';

const WeatherWidget: React.FC = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState('sapa');

  // Mock weather data for different locations
  const weatherData = {
    sapa: {
      location: 'Sapa',
      temperature: 18,
      condition: 'Partly Cloudy',
      icon: <Cloud className="h-10 w-10 text-secondary-500" />,
      humidity: 75,
      windSpeed: 12,
    },
    halong: {
      location: 'Ha Long Bay',
      temperature: 27,
      condition: 'Sunny',
      icon: <Sun className="h-10 w-10 text-accent-500" />,
      humidity: 65,
      windSpeed: 8,
    },
    phongnha: {
      location: 'Phong Nha',
      temperature: 24,
      condition: 'Rainy',
      icon: <CloudRain className="h-10 w-10 text-secondary-700" />,
      humidity: 85,
      windSpeed: 6,
    },
    dalat: {
      location: 'Da Lat',
      temperature: 22,
      condition: 'Cloudy',
      icon: <Cloud className="h-10 w-10 text-secondary-500" />,
      humidity: 70,
      windSpeed: 5,
    },
  };

  const locations = [
    { id: 'sapa', name: 'Sapa' },
    { id: 'halong', name: 'Ha Long Bay' },
    { id: 'phongnha', name: 'Phong Nha' },
    { id: 'dalat', name: 'Da Lat' },
  ];

  const currentWeather = weatherData[selectedLocation as keyof typeof weatherData];

  return (
    <Card className="h-full">
      <CardHeader className="bg-gray-50 border-b">
        <h3 className="font-heading font-medium">{t('weather.title')}</h3>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-4 divide-x text-center">
          {locations.map((location) => (
            <button
              key={location.id}
              className={`p-2 text-sm font-medium transition-colors ${
                selectedLocation === location.id
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedLocation(location.id)}
            >
              {location.name}
            </button>
          ))}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-xl font-medium">{currentWeather.location}</h4>
              <p className="text-gray-500">{currentWeather.condition}</p>
            </div>
            <div className="flex items-center">
              {currentWeather.icon}
              <span className="text-3xl font-medium ml-2">{currentWeather.temperature}°C</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Droplets className="h-5 w-5 text-secondary-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">{t('weather.humidity')}</p>
                <p className="font-medium">{currentWeather.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 text-secondary-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">{t('weather.windSpeed')}</p>
                <p className="font-medium">{currentWeather.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;