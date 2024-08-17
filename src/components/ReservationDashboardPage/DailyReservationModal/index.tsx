import DailyReservationDateDropdown from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationDateDropdown';
import DailyReservationModalHeader from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationModalHeader';
import DailyReservationTaps from '@/components/ReservationDashboardPage/DailyReservationModal/DailyReservationTaps';
import useDailyReservationModal from '@/hooks/useDailyReservationModal';

import DailyReservationList from './DailyReservationList';

interface DailyReservationModalProps {
  onClose: () => void;
}

export default function DailyReservationModal({
  onClose,
}: DailyReservationModalProps) {
  const { reservationStatus } = useDailyReservationModal();

  return (
    <>
      <div className="fixed z-[2] h-full w-full bg-white shadow-lg pc:absolute pc:right-0 pc:top-[60px] pc:h-[697px] pc:w-[429px] pc:rounded-3xl pc:border pc:border-kv-gray-400 tablet:absolute tablet:right-0 tablet:top-[60px] tablet:h-[697px] tablet:w-[429px] tablet:rounded-3xl tablet:border tablet:border-kv-gray-400 mobile:left-0 mobile:top-0 mobile:z-10">
        <DailyReservationModalHeader onClose={onClose} />
        {reservationStatus && (
          <>
            <DailyReservationTaps reservationStatus={reservationStatus} />
            <DailyReservationDateDropdown
              reservationStatus={reservationStatus}
            />
          </>
        )}
        <DailyReservationList />
      </div>
      <div className="backdrop" onClick={onClose} />
    </>
  );
}
