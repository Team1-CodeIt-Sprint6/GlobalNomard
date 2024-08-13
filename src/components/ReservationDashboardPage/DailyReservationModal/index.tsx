import DailyReservationDateDropdown from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationDateDropdown';
import DailyReservationModalHeader from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationModalHeader';
import DailyReservationTaps from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationTaps';
import useDailyReservationData from '@/hooks/useDailyReservationData';

interface DailyReservationModalProps {
  onClose: () => void;
}

export default function DailyReservationModal({
  onClose,
}: DailyReservationModalProps) {
  const { reservationStatus, reservationDetails } = useDailyReservationData();

  if (!reservationStatus) return null; /* 임시 타입가드 */

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-white shadow-lg pc:h-[697px] pc:w-[429px] pc:rounded-3xl pc:border pc:border-kv-gray-400 tablet:h-[697px] tablet:w-[429px] tablet:rounded-3xl tablet:border tablet:border-kv-gray-400">
      <DailyReservationModalHeader onClose={onClose} />
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
