import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        title: 'Explore Trails. Conquer Nature.',
        subtitle: 'Discover Vietnam\'s most spectacular outdoor adventures, from mountain peaks to hidden caves and beyond.',
        exploreBtn: 'Explore Trails'
      },
      header: {
        language: 'Language'
      },
      nav: {
        home: 'Home',
        outdoorSports: 'Outdoor Sports',
        outdoorActivities: 'Outdoor Activities',
        gearTech: 'Gear & Tech',
        events: 'Events',
        map: 'Map'
      },
      sports: {
        trailRunning: 'Trail Running',
        running: 'Running',
        raceGuides: 'Race Guides'
      },
      activities: {
        hiking: 'Hiking',
        climbing: 'Climbing',
        caving: 'Caving',
        camping: 'Camping',
        biking: 'Biking'
      },
      categories: {
        title: 'Explore Activities',
        subtitle: 'Discover your next adventure with our curated categories',
        outdoorSports: 'Outdoor Sports',
        outdoorSportsDesc: 'Trail running, races, and outdoor fitness activities across Vietnam',
        outdoorActivities: 'Outdoor Activities',
        outdoorActivitiesDesc: 'Hiking, climbing, caving, and other nature adventures',
        gearTech: 'Gear & Tech',
        gearTechDesc: 'Essential equipment, clothing, and technology for your adventures'
      },
      destinations: {
        title: 'Featured Destinations',
        subtitle: 'Explore these extraordinary locations for your next adventure',
        viewAll: 'View All Destinations'
      },
      blog: {
        title: 'Adventure Stories',
        subtitle: 'Latest tips, guides, and experiences from our community',
        viewAll: 'View All Articles'
      },
      events: {
        title: 'Upcoming Events',
        subtitle: 'Join races, meetups, and outdoor events across Vietnam',
        viewAll: 'View All Events',
        details: 'View Details',
        register: 'Register Now'
      },
      weather: {
        title: 'Weather Conditions',
        humidity: 'Humidity',
        windSpeed: 'Wind Speed'
      },
      map: {
        title: 'Interactive Trail Map',
        description: 'Discover and plan your adventures with our interactive map featuring trails, climbing spots, and outdoor activities across Vietnam.',
        exploreMap: 'Explore Full Map',
        interactiveMap: 'Click to explore the interactive map'
      },
      newsletter: {
        title: 'Stay Connected with Adventure News',
        description: 'Subscribe to receive updates on new trails, gear recommendations, and upcoming events.',
        emailPlaceholder: 'Your email address',
        subscribe: 'Subscribe',
        success: 'Thank you for subscribing!',
        privacy: 'We respect your privacy and will never share your information.'
      },
      features: {
        title: 'Everything You Need for Your Adventures',
        subtitle: 'VietnamADV provides comprehensive tools and information to make your outdoor experiences safe and memorable',
        maps: 'Detailed Maps',
        mapsDesc: 'Interactive trail maps with elevation profiles and GPS coordinates',
        safety: 'Safety Guidelines',
        safetyDesc: 'Comprehensive safety information for all activities and regions',
        seasons: 'Seasonal Guides',
        seasonsDesc: 'Best times to visit each destination based on weather patterns',
        community: 'Vibrant Community',
        communityDesc: 'Connect with fellow adventurers, share experiences and tips',
        activities: 'Diverse Activities',
        activitiesDesc: 'From hiking and climbing to water sports and more',
        planning: 'Trip Planning',
        planningDesc: 'Tools to plan your perfect adventure itinerary'
      },
      footer: {
        description: 'Vietnam\'s premier platform for outdoor adventure enthusiasts. Discover trails, climbing spots, and natural wonders across Vietnam.',
        explore: 'Explore',
        resources: 'Resources',
        community: 'Community',
        company: 'Company',
        trails: 'Trails',
        climbing: 'Climbing',
        running: 'Running',
        caving: 'Caving',
        events: 'Events',
        weatherInfo: 'Weather Info',
        safetyTips: 'Safety Tips',
        equipment: 'Equipment',
        seasonGuide: 'Season Guide',
        forum: 'Forum',
        stories: 'Stories',
        photos: 'Photos',
        reviews: 'Reviews',
        about: 'About Us',
        contact: 'Contact',
        press: 'Press',
        partners: 'Partners',
        careers: 'Careers',
        copyright: 'All rights reserved.',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy'
      }
    }
  },
  fr: {
    translation: {
      hero: {
        title: 'Explorez les Sentiers. Conquérez la Nature.',
        subtitle: 'Découvrez les aventures en plein air les plus spectaculaires du Vietnam, des sommets montagneux aux grottes cachées.',
        exploreBtn: 'Explorer les Sentiers'
      },
      header: {
        language: 'Langue'
      },
      nav: {
        home: 'Accueil',
        outdoorSports: 'Sports de Plein Air',
        outdoorActivities: 'Activités de Plein Air',
        gearTech: 'Équipement & Tech',
        events: 'Événements',
        map: 'Carte'
      },
      sports: {
        trailRunning: 'Course en Sentier',
        running: 'Course à Pied',
        raceGuides: 'Guides de Course'
      },
      activities: {
        hiking: 'Randonnée',
        climbing: 'Escalade',
        caving: 'Spéléologie',
        camping: 'Camping',
        biking: 'Cyclisme'
      }
    }
  },
  es: {
    translation: {
      hero: {
        title: 'Explora Senderos. Conquista la Naturaleza.',
        subtitle: 'Descubre las aventuras al aire libre más espectaculares de Vietnam, desde cumbres montañosas hasta cuevas ocultas.',
        exploreBtn: 'Explorar Senderos'
      },
      header: {
        language: 'Idioma'
      },
      nav: {
        home: 'Inicio',
        outdoorSports: 'Deportes al Aire Libre',
        outdoorActivities: 'Actividades al Aire Libre',
        gearTech: 'Equipo y Tecnología',
        events: 'Eventos',
        map: 'Mapa'
      },
      sports: {
        trailRunning: 'Trail Running',
        running: 'Carrera',
        raceGuides: 'Guías de Carrera'
      },
      activities: {
        hiking: 'Senderismo',
        climbing: 'Escalada',
        caving: 'Espeleología',
        camping: 'Camping',
        biking: 'Ciclismo'
      }
    }
  },
  vi: {
    translation: {
      hero: {
        title: 'Khám Phá Đường Mòn. Chinh Phục Thiên Nhiên.',
        subtitle: 'Khám phá những cuộc phiêu lưu ngoài trời ngoạn mục nhất Việt Nam, từ đỉnh núi đến hang động ẩn giấu.',
        exploreBtn: 'Khám Phá Đường Mòn',
        communityBtn: 'Tham Gia Cộng Đồng'
      },
      header: {
        signIn: 'Đăng Nhập',
        language: 'Ngôn Ngữ'
      },
      nav: {
        home: 'Trang Chủ',
        outdoorSports: 'Thể Thao Ngoài Trời',
        outdoorActivities: 'Hoạt Động Ngoài Trời',
        gearTech: 'Trang Bị & Công Nghệ',
        events: 'Sự Kiện',
        community: 'Cộng Đồng',
        map: 'Bản Đồ'
      },
      sports: {
        trailRunning: 'Chạy Địa Hình',
        running: 'Chạy Bộ',
        raceGuides: 'Hướng Dẫn Giải Chạy'
      },
      activities: {
        hiking: 'Leo Núi',
        climbing: 'Leo Đá',
        caving: 'Khám Phá Hang Động',
        camping: 'Cắm Trại',
        biking: 'Đạp Xe'
      },
      categories: {
        title: 'Khám Phá Hoạt Động',
        subtitle: 'Tìm cuộc phiêu lưu tiếp theo với các danh mục được tuyển chọn của chúng tôi',
        outdoorSports: 'Thể Thao Ngoài Trời',
        outdoorSportsDesc: 'Chạy địa hình, giải đua và các hoạt động thể thao ngoài trời khắp Việt Nam',
        outdoorActivities: 'Hoạt Động Ngoài Trời',
        outdoorActivitiesDesc: 'Leo núi, leo đá, khám phá hang động và các cuộc phiêu lưu thiên nhiên khác',
        gearTech: 'Trang Bị & Công Nghệ',
        gearTechDesc: 'Thiết bị, quần áo và công nghệ thiết yếu cho các cuộc phiêu lưu của bạn'
      },
      destinations: {
        title: 'Điểm Đến Nổi Bật',
        subtitle: 'Khám phá những địa điểm phi thường này cho cuộc phiêu lưu tiếp theo của bạn',
        viewAll: 'Xem Tất Cả Điểm Đến'
      },
      blog: {
        title: 'Câu Chuyện Phiêu Lưu',
        subtitle: 'Mẹo, hướng dẫn và trải nghiệm mới nhất từ cộng đồng của chúng tôi',
        viewAll: 'Xem Tất Cả Bài Viết'
      },
      events: {
        title: 'Sự Kiện Sắp Tới',
        subtitle: 'Tham gia các giải đua, gặp gỡ và sự kiện ngoài trời khắp Việt Nam',
        viewAll: 'Xem Tất Cả Sự Kiện',
        details: 'Xem Chi Tiết',
        register: 'Đăng Ký Ngay'
      },
      weather: {
        title: 'Điều Kiện Thời Tiết',
        humidity: 'Độ Ẩm',
        windSpeed: 'Tốc Độ Gió'
      },
      map: {
        title: 'Bản Đồ Đường Mòn Tương Tác',
        description: 'Khám phá và lên kế hoạch cho các cuộc phiêu lưu của bạn với bản đồ tương tác của chúng tôi, bao gồm các đường mòn, địa điểm leo núi và hoạt động ngoài trời khắp Việt Nam.',
        exploreMap: 'Khám Phá Bản Đồ Đầy Đủ',
        interactiveMap: 'Nhấp để khám phá bản đồ tương tác'
      },
      newsletter: {
        title: 'Kết Nối với Tin Tức Phiêu Lưu',
        description: 'Đăng ký để nhận thông tin cập nhật về đường mòn mới, khuyến nghị trang bị và sự kiện sắp tới.',
        emailPlaceholder: 'Địa chỉ email của bạn',
        subscribe: 'Đăng Ký',
        success: 'Cảm ơn bạn đã đăng ký!',
        privacy: 'Chúng tôi tôn trọng quyền riêng tư của bạn và sẽ không bao giờ chia sẻ thông tin của bạn.'
      },
      features: {
        title: 'Mọi Thứ Bạn Cần Cho Các Cuộc Phiêu Lưu',
        subtitle: 'VietnamADV cung cấp các công cụ và thông tin toàn diện để làm cho trải nghiệm ngoài trời của bạn an toàn và đáng nhớ',
        maps: 'Bản Đồ Chi Tiết',
        mapsDesc: 'Bản đồ đường mòn tương tác với hồ sơ độ cao và tọa độ GPS',
        safety: 'Hướng Dẫn An Toàn',
        safetyDesc: 'Thông tin an toàn toàn diện cho tất cả các hoạt động và khu vực',
        seasons: 'Hướng Dẫn Theo Mùa',
        seasonsDesc: 'Thời điểm tốt nhất để thăm mỗi điểm đến dựa trên các kiểu thời tiết',
        community: 'Cộng Đồng Sôi Động',
        communityDesc: 'Kết nối với những người phiêu lưu khác, chia sẻ kinh nghiệm và mẹo',
        activities: 'Hoạt Động Đa Dạng',
        activitiesDesc: 'Từ leo núi và leo đá đến các môn thể thao dưới nước và hơn thế nữa',
        planning: 'Lập Kế Hoạch Chuyến Đi',
        planningDesc: 'Công cụ để lập kế hoạch cho lịch trình phiêu lưu hoàn hảo của bạn'
      },
      footer: {
        description: 'Nền tảng hàng đầu Việt Nam cho những người đam mê phiêu lưu ngoài trời. Khám phá các đường mòn, địa điểm leo núi và kỳ quan thiên nhiên khắp Việt Nam.',
        explore: 'Khám Phá',
        resources: 'Tài Nguyên',
        community: 'Cộng Đồng',
        company: 'Công Ty',
        trails: 'Đường Mòn',
        climbing: 'Leo Đá',
        running: 'Chạy Bộ',
        caving: 'Hang Động',
        events: 'Sự Kiện',
        weatherInfo: 'Thông Tin Thời Tiết',
        safetyTips: 'Mẹo An Toàn',
        equipment: 'Trang Thiết Bị',
        seasonGuide: 'Hướng Dẫn Theo Mùa',
        forum: 'Diễn Đàn',
        stories: 'Câu Chuyện',
        photos: 'Hình Ảnh',
        reviews: 'Đánh Giá',
        about: 'Về Chúng Tôi',
        contact: 'Liên Hệ',
        press: 'Báo Chí',
        partners: 'Đối Tác',
        careers: 'Tuyển Dụng',
        copyright: 'Đã đăng ký Bản quyền.',
        terms: 'Điều Khoản Dịch Vụ',
        privacy: 'Chính Sách Bảo Mật',
        cookies: 'Chính Sách Cookie'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;