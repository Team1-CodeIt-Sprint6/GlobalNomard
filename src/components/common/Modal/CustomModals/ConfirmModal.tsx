import CheckIcon from 'public/assets/icons/icon_check.svg';

interface ModalProps {
  message?: string;
  onClose: () => void;
}

export default function ConfirmModal({ message, onClose }: ModalProps) {
  return (
    <div className="pointer-events-auto relative flex h-[220px] w-[327px] flex-col rounded-lg bg-white shadow-lg pc:h-[250px] pc:w-[540px] tablet:h-[250px] tablet:w-[540px]">
      <div className="flex flex-grow items-center justify-center px-6">
        <CheckIcon className="mr-2 h-6 w-6" />
        <p className="mb-[28px] max-h-[96px] overflow-hidden text-center font-kv-medium pc:text-kv-2lg tablet:text-kv-2lg">
          {message || '메세지가 없습니다.'}
        </p>
      </div>
      <button
        onClick={onClose}
        className="inset-x-0 bottom-[68px] m-auto h-[42px] w-[138px] rounded-[8px] bg-kv-primary-blue text-kv-md font-kv-medium text-white hover:bg-kv-blue pc:right-[28px] pc:mr-0 pc:text-kv-lg tablet:right-[28px] tablet:mr-0 tablet:text-kv-lg"
      >
        아니오
      </button>
      <button
        onClick={onClose}
        className="absolute inset-x-0 bottom-[28px] m-auto h-[42px] w-[138px] rounded-[8px] bg-kv-primary-blue text-kv-md font-kv-medium text-white hover:bg-kv-blue pc:right-[28px] pc:mr-0 pc:text-kv-lg tablet:right-[28px] tablet:mr-0 tablet:text-kv-lg"
      >
        취소하기
      </button>
    </div>
  );
}
