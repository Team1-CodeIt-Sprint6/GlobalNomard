import { useAtomValue } from 'jotai';

import Button from '@/components/common/Button';
import { usePatchReservationStatus } from '@/hooks/useUpdateReservationStatus';
import { dailyReservationModalAtom } from '@/state/reservationDashboardAtom';
import { ReservationDetailsResponse } from '@/types/get/ReservationDashboardPageGetTypes';
import { PatchReservationStatusParamsType } from '@/types/page/ReservationDashboardPageTypes';

interface DailyReservationListProps {
  reservationDetails: ReservationDetailsResponse;
}

export default function DailyReservationList({
  reservationDetails,
}: DailyReservationListProps) {
  const { activityId } = useAtomValue(dailyReservationModalAtom);
  const patchReservationStatus = usePatchReservationStatus();

  const handleReservationActionClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const { status, id: reservationId } = currentTarget.dataset;

    const isInvalidReservationAction =
      !status ||
      !reservationId ||
      !activityId ||
      patchReservationStatus.isPending;

    if (isInvalidReservationAction) return;

    const params: PatchReservationStatusParamsType = {
      status: status as 'confirmed' | 'declined',
      reservationId,
      activityId,
    };

    patchReservationStatus.mutate(params);
  };

  return (
    <div className="mx-auto mt-[27px] h-[294px] w-[343px]">
      <p className="daily-modal-sub-title mb-[16px]">예약 내역</p>
      <div className="h-[248px] overflow-auto scrollbar-none-custom">
        {reservationDetails?.reservations.map(
          ({ nickname, headCount, id }, index) => {
            return (
              <div
                className="mb-[16px] flex h-[116px] w-[343px] flex-col gap-[6px] rounded-xl border px-[16px] pt-[16px]"
                key={index}
              >
                <div className="daily-modal-list-content">
                  <span className="daily-modal-list-sub-title">닉네임</span>
                  {nickname}
                </div>
                <div className="daily-modal-list-content">
                  <span className="daily-modal-list-sub-title">인원</span>
                  {headCount}명
                </div>
                <div className="flex h-[38px] items-center justify-end gap-[6px]">
                  <Button
                    type="button"
                    data-status="confirmed"
                    data-id={id}
                    onClick={handleReservationActionClick}
                    className="daily-modal-button-base bg-kv-primary-blue text-white"
                  >
                    승인하기
                  </Button>
                  <Button
                    type="button"
                    data-status="declined"
                    data-id={id}
                    onClick={handleReservationActionClick}
                    className="daily-modal-button-base border-kv-primary-blue text-kv-primary-blue"
                  >
                    거절하기
                  </Button>
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
