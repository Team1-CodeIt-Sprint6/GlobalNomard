import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '@/components/common/Button';
import ErrorText from '@/components/common/ErrorText';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import Modal from '@/components/common/Modal/Modal';
import useModal from '@/hooks/useModal';
import useSignup from '@/hooks/useSignup';
import { SignUpForm } from '@/types/AuthTypes';

import PasswordInput from './PasswordInput';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
      '잘못된 이메일입니다.',
    )
    .required('이메일을 입력해주세요'),
  nickname: yup.string().required('닉네임을 입력해주세요'),
  password: yup
    .string()
    .min(8, '8자 이상 입력해주세요')
    .required('비밀번호를 입력해주세요'),
  password_confirm: yup
    .string()
    .min(8, '8자 이상 입력해주세요')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 입력해주세요'),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpForm>({ mode: 'onChange', resolver: yupResolver(schema) });

  const { modalProps, openModal } = useModal();

  const mutation = useSignup(openModal);

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    await mutation.mutateAsync(data);
  };

  return (
    <>
      <Modal {...modalProps} />
      <form
        className={`${modalProps.isOpen && 'z-[-1]'} flex w-[100%] flex-col gap-[32px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-6">
          <div className="grid gap-[10px]">
            <Label htmlFor="email" className="flex flex-col gap-3">
              이메일
              <Input
                type="text"
                id="email"
                placeholder="이메일을 입력해 주세요"
                {...register('email')}
                validationCheck={!!errors.email}
              />
              {errors.email?.message && (
                <ErrorText>{errors.email?.message}</ErrorText>
              )}
            </Label>
          </div>
          <div className="grid gap-[10px]">
            <Label htmlFor="nickname" className="flex flex-col gap-3">
              닉네임
              <Input
                type="text"
                id="nickname"
                placeholder="닉네임을 입력해 주세요"
                {...register('nickname')}
                validationCheck={!!errors.nickname}
              />
              {errors.nickname?.message && (
                <ErrorText>{errors.nickname?.message}</ErrorText>
              )}
            </Label>
          </div>
          <div className="grid gap-[10px]">
            <Label htmlFor="password" className="relative flex flex-col gap-3">
              비밀번호
              <PasswordInput
                id="password"
                placeholder="비밀번호를 입력해 주세요"
                {...register('password')}
                validationCheck={!!errors.password}
              />
            </Label>
            {errors.password && (
              <ErrorText>{errors.password?.message}</ErrorText>
            )}
          </div>
          <div className="grid gap-[10px]">
            <Label
              htmlFor="password_confirm"
              className="relative flex flex-col gap-3"
            >
              비밀번호 확인
              <PasswordInput
                id="password_confirm"
                placeholder="비밀번호를 입력해 주세요"
                {...register('password_confirm')}
                validationCheck={!!errors.password_confirm}
              />
            </Label>
            {errors.password_confirm && (
              <ErrorText>{errors.password_confirm?.message}</ErrorText>
            )}
          </div>
        </div>
        <Button
          disabled={!isValid || mutation.isPending}
          type="submit"
          className={`${!isValid || mutation.isPending ? 'bg-kv-gray-600 text-white' : 'bg-kv-primary-blue text-white'}`}
        >
          회원가입 하기
        </Button>
      </form>
    </>
  );
}