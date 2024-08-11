import React, { useState } from 'react';

import { CustomModalProps } from '@/types/modalTypes';

export default function ReviewModal({
  reservation,
  onClose,
}: CustomModalProps) {
  if (!reservation || !reservation.activity) {
    return null;
  }

  return (
    <div className="modal-container h-[750px] w-[480px] rounded-[24px] align-center"></div>
  );
}
