import instance from '@/lib/apis/axios';
import { ActivityResponse as ActivityDetailResponse } from '@/types/activityDetailPageTypes';
import { ActivityResponse } from '@/types/activityTypes';
import {
  ReservationDetailsResponse,
  ReservationStatusResponse,
} from '@/types/get/ReservationDashboardPageGetTypes';
import {
  MyActivitiesResponse,
  ReservationDashboardResponse,
} from '@/types/page/ReservationDashboardPageTypes';

export const getMyActivities = async (): Promise<{
  data: MyActivitiesResponse;
}> => {
  const response = await instance.get<MyActivitiesResponse>('/my-activities');
  return { data: response.data };
};

export const getReservationDashboard = async (
  activityId: number,
  year: string,
  month: string,
): Promise<{ data: ReservationDashboardResponse[] }> => {
  const response = await instance.get<ReservationDashboardResponse[]>(
    `/my-activities/${activityId}/reservation-dashboard`,
    {
      params: { year, month },
    },
  );
  return { data: response.data };
};

// 예약 상세 조회
export const getActivityDetail = async (
  activityId: number,
): Promise<{ data: ActivityDetailResponse }> => {
  const response = await instance.get<ActivityDetailResponse>(
    `/activities/${activityId}`,
  );
  return { data: response.data };
};

// 체험 상세 조회
export const getActivity = async (
  activityId: number,
): Promise<{ data: ActivityResponse }> => {
  const response = await instance.get<ActivityResponse>(
    `/activities/${activityId}`,
  );
  return { data: response.data };
};

// 특정 날짜에 등록된 예약 상태를 조회한다. 신청, 승인, 거절...
export const getReservationStatus = async (
  activityId: number,
  date: string,
): Promise<{ data: ReservationStatusResponse[] }> => {
  const response = await instance.get<ReservationStatusResponse[]>(
    `/my-activities/${activityId}/reserved-schedule`,
    {
      params: { date },
    },
  );
  return { data: response.data };
};

// 특정 날짜의 예약자 정보를 조회한다. 닉네임, 인원수...
export const getReservationDetails = async (
  activityId: number,
  scheduleId: number,
  status: string,
  cursorId?: number,
  size?: number,
): Promise<{ data: ReservationDetailsResponse }> => {
  const response = await instance.get<ReservationDetailsResponse>(
    `/my-activities/${activityId}/reservations`,
    {
      params: {
        cursorId: cursorId || null,
        size: size || 10,
        scheduleId,
        status,
      },
    },
  );
  return { data: response.data };
};
