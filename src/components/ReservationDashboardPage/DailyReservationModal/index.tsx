// import { useAtomValue } from 'jotai';

import DailyReservationDateDropdown from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationDateDropdown';
// import { dailyReservationModalAtom } from '@/state/reservationDashboardAtom';
import DailyReservationModalHeader from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationModalHeader';
import DailyReservationTaps from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationTaps';
import useDailyReservationData from '@/hooks/useDailyReservationData';

export default function DailyReservationModal() {
  const { reservationStatus, reservationDetails } = useDailyReservationData();
  // const dailyModalState = useAtomValue(dailyReservationModalAtom);

  if (!reservationStatus) return null; /* 임시 타입가드 */

  return (
    <div className="absolute left-[20px] top-[300px] z-10 h-[697px] w-[429px] rounded-3xl border border-kv-gray-400 bg-white shadow-lg">
      <DailyReservationModalHeader />
      <DailyReservationTaps reservationStatus={reservationStatus} />
      <DailyReservationDateDropdown reservationStatus={reservationStatus} />
      {/* <DailyReservationList /> */}
      <div className="mx-auto mt-[27px] h-[294px] w-[381px]">
        <p className="sub-title mb-[16px]">예약 내역</p>
        {reservationDetails?.reservations.map(
          ({ nickname, headCount }, index) => {
            return (
              <div key={index}>
                <div>닉네임: {nickname}</div>
                <div>인원: {headCount}</div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
