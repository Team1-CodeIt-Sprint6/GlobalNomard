import React from 'react';

import AlertModal from './CustomModals/AlertModal';
import ConfirmModal from './CustomModals/ConfirmModal';
import ErrorModal from './CustomModals/ErrorModal';
import ModalTemplate from './ModalTemplate';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  type: 'alert' | 'confirm' | 'error';
}

export default function CustomModal({
  isOpen,
  onClose,
  message,
  type,
}: CustomModalProps) {
  // 조건부 랜더링을 위해 삼항연산자를 사용하지 않은 이유
  // 모달이 계속 추가될 경우 import하고 객체에 추가하면 확장이 편리함
  const modalComponents = {
    alert: AlertModal,
    confirm: ConfirmModal,
    error: ErrorModal,
  } as const;

  const ModalContent = modalComponents[type];

  return (
    <ModalTemplate isOpen={isOpen} onClose={onClose}>
      {() => (
        <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
          <ModalContent onClose={onClose} message={message} />
        </div>
      )}
    </ModalTemplate>
  );
}
