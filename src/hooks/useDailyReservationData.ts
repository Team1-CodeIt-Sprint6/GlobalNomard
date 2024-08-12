import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { getReservationSchedule } from '@/lib/apis/getApis';
import {
  dailyReservationModalAtom,
  reservationDashboardQueryParamsAtom,
} from '@/state/reservationDashboardAtom';

import useFetchData from './useFetchData';

export default function useDailyReservationData() {
  const { activityId: id } = useAtomValue(reservationDashboardQueryParamsAtom);
  const [dailyModalState, setDailyModalState] = useAtom(
    dailyReservationModalAtom,
  );

  useEffect(() => {
    setDailyModalState((prev) => ({
      ...prev,
      activityId: id,
    }));
  }, [id]);

  const { data } = useFetchData(
    [dailyModalState, id],
    () =>
      getReservationSchedule(dailyModalState.activityId, dailyModalState.date),
    {
      enabled: !!dailyModalState.activityId,
    },
  );
  // 날짜를 받아서 실행하는 함수
  // 날짜에 들어온 신청의 상태만 가져오기 date, status
  // 날짜에 들어온 신청 전부 불러오기  nickname, headcount, id
  // 승인하기, 거절하기 함수 id
  return {
    data,
  };
}
