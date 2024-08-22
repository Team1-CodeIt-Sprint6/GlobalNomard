import { useMutation } from '@tanstack/react-query';

import { getActivityList } from '@/lib/apis/getApis';
import {
  getActivityListParams,
  getActivityListResponse,
  MainPageOptionTypes,
  MyActivityList,
} from '@/types/get/activityTypes';

// NOTE: 로그인 성공시 쿠키에 토큰 저장, 실패시 에러 출력하는 훅
const useActivityList = () => {
  return useMutation<
    { data: getActivityListResponse },
    Error,
    MainPageOptionTypes,
    Error
  >({
    mutationFn: getActivityList,
    onError: (error: Error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      return data;
    },
  });
};

export default useActivityList;
