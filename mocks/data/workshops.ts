import { Workshop } from '@/types/workshop';

// 모킹 워크샵 데이터
export const mockWorkshops: Workshop[] = [
  {
    id: '1',
    title: '서울 도자기 만들기 워크샵',
    image_url: 'https://images.unsplash.com/photo-1565122644474-5bb0f8b8b50a?q=80&w=2070',
    description: '전통 도자기 만들기 체험을 통해 한국 문화를 배워보세요.',
    location: { lat: 37.5665, lng: 126.9780 },
    view: 120,
    created_at: new Date('2025-03-10T09:00:00Z'),
    updated_at: new Date('2025-03-10T09:00:00Z'),
    created_by: 'user-1',
  },
  {
    id: '2',
    title: '부산 해산물 요리 클래스',
    image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    description: '부산의 신선한 해산물로 맛있는 요리를 배워보세요.',
    location: { lat: 35.1796, lng: 129.0756 },
    view: 85,
    created_at: new Date('2025-03-15T10:30:00Z'),
    updated_at: new Date('2025-03-15T10:30:00Z'),
    created_by: 'user-2',
  },
  {
    id: '3',
    title: '제주 감귤 따기 체험',
    image_url: 'https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=2070',
    description: '제주도의 대표 과일인 감귤을 직접 따보는 체험을 해보세요.',
    location: { lat: 33.4996, lng: 126.5312 },
    view: 210,
    created_at: new Date('2025-03-20T11:00:00Z'),
    updated_at: new Date('2025-03-20T11:00:00Z'),
    created_by: 'user-3',
  },
  {
    id: '4',
    title: '인천 전통주 만들기',
    image_url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069',
    description: '한국 전통주 제조 과정을 배우고 직접 만들어보세요.',
    location: { lat: 37.4563, lng: 126.7052 },
    view: 65,
    created_at: new Date('2025-03-25T13:00:00Z'),
    updated_at: new Date('2025-03-25T13:00:00Z'),
    created_by: 'user-4',
  },
  {
    id: '5',
    title: '대전 과학 실험 워크샵',
    image_url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070',
    description: '재미있는 과학 실험을 통해 과학의 원리를 배워보세요.',
    location: { lat: 36.3504, lng: 127.3845 },
    view: 150,
    created_at: new Date('2025-04-01T09:30:00Z'),
    updated_at: new Date('2025-04-01T09:30:00Z'),
    created_by: 'user-5',
  },
  {
    id: '6',
    title: '강릉 커피 로스팅 클래스',
    image_url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070',
    description: '강릉의 유명한 커피 문화를 체험하고 로스팅 기술을 배워보세요.',
    location: { lat: 37.7556, lng: 128.8961 },
    view: 95,
    created_at: new Date('2025-04-05T14:00:00Z'),
    updated_at: new Date('2025-04-05T14:00:00Z'),
    created_by: 'user-6',
  },
  {
    id: '7',
    title: '전주 한옥마을 한복 체험',
    image_url: 'https://images.unsplash.com/photo-1561526116-e2460f4d40a9?q=80&w=1974',
    description: '전주 한옥마을에서 한복을 입고 전통 문화를 체험해보세요.',
    location: { lat: 35.8142, lng: 127.1480 },
    view: 180,
    created_at: new Date('2025-04-10T10:00:00Z'),
    updated_at: new Date('2025-04-10T10:00:00Z'),
    created_by: 'user-7',
  },
  {
    id: '8',
    title: '광주 김치 만들기 체험',
    image_url: 'https://images.unsplash.com/photo-1583224964978-2d1a9f859294?q=80&w=2070',
    description: '한국의 대표 음식인 김치를 직접 만들어보는 체험을 해보세요.',
    location: { lat: 35.1595, lng: 126.8526 },
    view: 75,
    created_at: new Date('2025-04-15T11:30:00Z'),
    updated_at: new Date('2025-04-15T11:30:00Z'),
    created_by: 'user-8',
  },
  {
    id: '9',
    title: '대구 섬유 공예 워크샵',
    image_url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072',
    description: '대구의 전통 섬유 산업을 배우고 직접 공예품을 만들어보세요.',
    location: { lat: 35.8714, lng: 128.6014 },
    view: 60,
    created_at: new Date('2025-04-20T13:30:00Z'),
    updated_at: new Date('2025-04-20T13:30:00Z'),
    created_by: 'user-9',
  },
  {
    id: '10',
    title: '울산 조선소 견학 및 모형선 만들기',
    image_url: 'https://images.unsplash.com/photo-1589928058263-1a6f6d05c5a1?q=80&w=2071',
    description: '세계적인 조선소를 견학하고 나만의 모형선을 만들어보세요.',
    location: { lat: 35.5384, lng: 129.3114 },
    view: 110,
    created_at: new Date('2025-04-25T09:00:00Z'),
    updated_at: new Date('2025-04-25T09:00:00Z'),
    created_by: 'user-10',
  },
];

// 거리 계산 함수 (Haversine 공식)
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371e3; // 지구 반지름 (미터)
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // 미터 단위 거리
}
