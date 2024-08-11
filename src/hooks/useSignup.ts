import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { postSignup } from '@/lib/apis/postApis';
import { SignUpForm, SignUpResponse } from '@/types/AuthTypes';
import { ModalCallbacks, ModalType } from '@/types/modalTypes';

// NOTE: 로그인 성공시 쿠키에 토큰 저장, 실패시 에러 출력하는 훅
const useSignup = (
  callback: (
    modalType: ModalType,
    newMessage: string,
    newCallbacks?: ModalCallbacks,
  ) => void,
) => {
  const router = useRouter();
  return useMutation<SignUpResponse, Error, SignUpForm, Error>({
    mutationFn: postSignup,
    onError: (error: Error) => {
      if (error instanceof AxiosError) {
        callback('alert', error.response?.data.message);
      } else {
        callback('alert', '알 수 없는 오류가 발생했습니다.');
      }
    },
    onSuccess: () => {
      callback('alert', '가입이 완료되었습니다!', {
        onConfirm: () => router.push('/login'),
      });
    },
  });
};

export default useSignup;
