import Image from 'next/image';
import React, { useState } from 'react';

import CloseIcon from '@/assets/icons/iocn_x_lg.svg';
import { CustomModalProps } from '@/types/modalTypes';

export default function ReviewModal({
  reservation,
  onClose,
}: CustomModalProps) {
  if (!reservation || !reservation.activity) {
    return null;
  }

  return (
    <div className="modal-container h-[750px] w-[480px] rounded-[24px] align-center">
      <div className="h-[686px] w-[432px]">
        {/* 제목 바 */}
        <div className="flex h-10 w-full items-center justify-between">
          <h2 className="font-kv-bold kv-text-2xl">후기 작성</h2>
          <div className="h-7 w-7">
            <CloseIcon />
          </div>
        </div>

        {/* 나머지 컨텐츠 container */}
        <div className="mt-[41px] h-[605px] flex-col justify-between">
          {/* --- 체험정보 --- */}
          <div className="flex h-[126px] w-full items-center">
            <div className="relative h-[126px] w-[126px] rounded-[12px]">
              <Image
                src={reservation.activity.bannerImageUrl}
                alt={reservation.activity.title}
                layout="fill"
                objectFit="cover"
                className="rounded-[12px]"
              />
            </div>

            <div className="ml-6 flex h-full w-[271px] flex-col justify-between">
              <h3 className="activity-card-title">
                {reservation.activity.title}
              </h3>
              <p className="font-kv-regular text-kv-gray-700 kv-text-xs pc:kv-text-2lg tablet:kv-text-md">
                {reservation.date} ・ {reservation.startTime} -{' '}
                {reservation.endTime}・ {reservation.headCount}명
              </p>
              <div className="h-[1px] w-[282px] bg-kv-black opacity-10"></div>
              <p className="font-kv-bold kv-text-3xl">
                ₩{reservation.totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
