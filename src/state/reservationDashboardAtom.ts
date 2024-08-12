import { atom } from 'jotai';

import { ReservationDashboardResponse } from '@/types/page/ReservationDashboardPageTypes';

// 달력에 표시할 정보를 요청하는데 사용될 데이터
export interface ReservationDashboardQueryParamsType {
  activityId: number;
  year: string;
  month: string;
}

// 칩 데이터를 호출 할 때 필요한 쿼리 파라미터
export const reservationDashboardQueryParamsAtom =
  atom<ReservationDashboardQueryParamsType>({
    activityId: 0,
    year: new Date().getFullYear().toString(),
    month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
  });

// 달력에 표시할 칩 데이터
export const calendarChipAtom = atom<ReservationDashboardResponse[]>([]);

export interface DailyReservationModalType {
  activityId: number;
  date: string;
}
// 예약 정보 모달 데이터
export const dailyReservationModalAtom = atom<DailyReservationModalType>({
  activityId: 0,
  date: '',
});
