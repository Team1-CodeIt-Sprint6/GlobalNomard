import { useMutation } from '@tanstack/react-query';

import { patchReservationStatus } from '@/lib/apis/patchApis';
import { PatchReservationStatusParamsType } from '@/types/page/ReservationDashboardPageTypes';

export const usePatchReservationStatus = () => {
  return useMutation({
    mutationFn: ({
      activityId,
      status,
      reservationId,
    }: PatchReservationStatusParamsType) =>
      patchReservationStatus({ activityId, status, reservationId }),
  });
};
