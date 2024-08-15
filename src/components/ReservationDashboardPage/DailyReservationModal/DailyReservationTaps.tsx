import { useAtom } from 'jotai';

import { dailyReservationModalAtom } from '@/state/reservationDashboardAtom';
import { ReservationStatusResponse } from '@/types/get/ReservationDashboardPageGetTypes';

interface DailyReservationTapsProps {
  reservationStatus: ReservationStatusResponse[];
}

export default function DailyReservationTaps({
  reservationStatus,
}: DailyReservationTapsProps) {
  const [{ status }, setSelectedStatus] = useAtom(dailyReservationModalAtom);

  const handleTapClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLDivElement>) => {
    setSelectedStatus((prev) => ({
      ...prev,
      status: currentTarget.dataset.status as
        | 'pending'
        | 'confirmed'
        | 'declined',
    }));
  };

  // TODO:현재 카운트 보여주는 값이 초기값의 숫자이다. 모든 값을 더해서 토탈 데이터를 보여줘야한다.
  return (
    <div className="mx-auto mt-[27px] flex h-[42px] w-full items-center border-b border-b-kv-gray-300 pl-[21px]">
      <div className="mx-auto flex w-[343px]">
        <div
          className={`daily-modal-status-tap-base ${status === 'pending' && 'daily-modal-status-active'}`}
          data-status="pending"
          onClick={handleTapClick}
        >
          신청{reservationStatus[0]?.count.pending}
        </div>
        <div
          className={`daily-modal-status-tap-base ${status === 'confirmed' && 'daily-modal-status-active'}`}
          data-status="confirmed"
          onClick={handleTapClick}
        >
          승인{reservationStatus[0]?.count.confirmed}
        </div>
        <div
          className={`daily-modal-status-tap-base ${status === 'declined' && 'daily-modal-status-active'}`}
          data-status="declined"
          onClick={handleTapClick}
        >
          거절{reservationStatus[0]?.count.declined}
        </div>
      </div>
    </div>
  );
}
