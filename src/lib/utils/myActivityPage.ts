import * as yup from 'yup';

import { AVAILABLE_TIMES } from '@/constants/myActivityPage';
import { Schedule } from '@/types/activityTypes';

// 기존에 추가된 일정과 새 일정이 중복되는지 확인
export const checkDuplication = (schedules: Schedule[], schedule: Schedule) => {
  const startIdx = AVAILABLE_TIMES.indexOf(schedule.startTime);
  const endIdx = AVAILABLE_TIMES.indexOf(schedule.endTime);

  const overlaps = schedules.filter((s) => {
    const si = AVAILABLE_TIMES.indexOf(s.startTime);
    const ei = AVAILABLE_TIMES.indexOf(s.endTime);

    const isSameDate = s.date === schedule.date;
    const doesTimeOverlap =
      (si <= startIdx && startIdx < ei) ||
      (si < endIdx && endIdx <= ei) ||
      (startIdx <= si && ei <= endIdx);

    return isSameDate && doesTimeOverlap;
  });

  // 겹치는 일정이 존재하면 중복
  return !!overlaps.length;
};

export const activityFormSchema = yup.object().shape({
  title: yup.string().required('제목을 입력해주세요.'),
  description: yup.string().required('설명을 입력해주세요.'),
  price: yup
    .number()
    .typeError('가격은 숫자여야 합니다.')
    .positive('가격은 양수여야 합니다.')
    .integer('가격은 정수여야 합니다.')
    .required('가격을 입력해주세요.')
    .transform((value, originalValue) =>
      typeof originalValue === 'string' && originalValue.trim() === ''
        ? null
        : value,
    ),
  address: yup.string().required('주소를 입력해주세요.'),
});
