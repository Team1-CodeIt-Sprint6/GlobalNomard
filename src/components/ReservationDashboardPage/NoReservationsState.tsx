import Image from 'next/image';

import { ReservationDashboardHeader } from './ReservationDashboardHeader';

export default function NoReservationsState() {
  return (
    <div className="reservation-dashboard-container">
      <ReservationDashboardHeader />
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/assets/images/empty_img.png"
          alt="빈 상태 이미지"
          width={200}
          height={200}
          className="mb-4 pc:size-[240px]"
        />
        <p className="text-2xl font-kv-medium">아직 등록한 체험이 없어요</p>
      </div>
    </div>
  );
}
