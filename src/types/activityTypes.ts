export interface MyActivityForm {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  schedules?: Schedule[];
  bannerImageUrl: string;
  subImageUrls?: string[];
}

export interface ActivityResponse {
  id: number;
  userId: number;
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  schedules?: ScheduleResponse[];
  bannerImageUrl: string;
  subImageUrls?: SubImageResponse[];
  reviewCount: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

export interface ScheduleResponse extends Schedule {
  id: number;
}

export interface SubImageResponse {
  id: number;
  imageUrl: string;
}

export const CATEGORIES = {
  ART: '문화 예술',
  'F&B': '식음료',
  SPORT: '스포츠',
  TOUR: '투어',
  SIGHTSEEING: '관광',
  WELLBEING: '웰빙',
} as const;

export type CategoryType = (typeof CATEGORIES)[keyof typeof CATEGORIES];
