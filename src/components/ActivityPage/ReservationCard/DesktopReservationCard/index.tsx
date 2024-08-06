import { deleteCookie } from 'cookies-next';
import React, { useEffect } from 'react';

import ContentTitle from '@/components/ActivityPage/ReservationCard/ReservationCommon/ContentTitle';
import ParticipantCounter from '@/components/ActivityPage/ReservationCard/ReservationCommon/ParticipantCounter';
import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import TimeSelector from '@/components/ActivityPage/ReservationCard/ReservationCommon/TimeSelector';
import TotalSummary from '@/components/ActivityPage/ReservationCard/ReservationCommon/TotalSummary';
import DatePicker from '@/components/common/DatePicker/DatePicker';
import { Modal, useModal } from '@/components/common/Modal';
import { useReservation } from '@/hooks/useReservation';
import {
  CardEventHandlerType,
  ReservationStateType,
} from '@/types/activityDetailPageTypes';

interface DesktopReservationCardProps {
  onClick: CardEventHandlerType;
  reservationState: ReservationStateType;
}

export default function DesktopReservationCard({
  onClick,
  reservationState,
}: DesktopReservationCardProps) {
  const { submitReservation, isSuccess } = useReservation();
  const { openModal, closeModal, isOpen, modalType, message } = useModal();

  const handleSubmit = () => {
    submitReservation(reservationState);
  };

  const deleteTokens = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
  };

  useEffect(() => {
    if (isSuccess) {
      openModal('alert', `예약이 성공적으로 완료되었습니다.`);
    }
  }, [isSuccess, openModal]);

  return (
    <>
      <button onClick={deleteTokens}>쿠키 삭제</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        type={modalType}
        message={message}
      />
      <div className="w-[384px] rounded-lg border bg-white p-4 shadow-lg">
        <PriceDisplay
          containerClassName="pt-[20px] pl-0"
          priceClassName="text-kv-3xl font-kv-bold"
          unitClassName="text-kv-xl font-kv-regular"
          price={reservationState.price}
          headCount={reservationState.headCount}
        />
        <div className="!my-[16px] divider" />
        <div className="mx-auto w-[336px]">
          <ContentTitle />
          <div className="mb-[16px] align-center">
            <DatePicker
              onClick={onClick.handleCalendarClick}
              variant="inline"
              noneToggle={true}
              className="z-0 mb-4 w-full"
            />
          </div>
          <TimeSelector onClick={onClick} reservationState={reservationState} />
          <div className="mb-[12px] mt-[16px] divider" />
          <ParticipantCounter
            headCount={reservationState.headCount}
            onClick={onClick}
          />
          {/* api post 요청 보내기  */}
          <ReservationButton
            className="mx-auto my-[24px] block w-full rounded-[4px] bg-kv-primary-blue"
            onClick={handleSubmit}
          />
          <div className="divider" />
          <TotalSummary
            totalAmount={reservationState.price * reservationState.headCount}
          />
        </div>
      </div>
    </>
  );
}
