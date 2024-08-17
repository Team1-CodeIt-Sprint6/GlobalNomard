import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { getReservationStatus } from '@/lib/apis/getApis';
import {
  dailyReservationModalAtom,
  reservationDashboardQueryParamsAtom,
} from '@/state/reservationDashboardAtom';

import useFetchData from './useFetchData';

export default function useDailyReservationModal() {
  const { activityId: id } = useAtomValue(reservationDashboardQueryParamsAtom);
  const [dailyModalState, setDailyModalState] = useAtom(
    dailyReservationModalAtom,
  );

  // 드롭다운에서 체험 선택 감지하고 전역 상태 activityId 업데이트
  useEffect(() => {
    setDailyModalState((prev) => ({
      ...prev,
      activityId: id,
    }));
  }, [id, dailyModalState.date]);

  // 달력에서 날짜 선택을 감지하고 getReservationStatus 실행
  const { data: reservationStatus } = useFetchData(
    ['reservationStatus', dailyModalState.activityId, dailyModalState.date],
    () =>
      getReservationStatus(dailyModalState.activityId, dailyModalState.date),
    {
      enabled: !!dailyModalState.activityId && !!dailyModalState.date,
    },
  );

  // getReservationStatus의 반환 값을 감지하여 전역 상태 scheduleId 업데이트
  useEffect(() => {
    const hasData = reservationStatus && reservationStatus.length > 0;

    if (hasData) {
      setDailyModalState((prev) => ({
        ...prev,
        scheduleId: reservationStatus[0].scheduleId,
      }));
    }
  }, [reservationStatus]);

  return {
    reservationStatus, // 신청 현황 탭과 예약 날짜 드롭다운
  };
}
