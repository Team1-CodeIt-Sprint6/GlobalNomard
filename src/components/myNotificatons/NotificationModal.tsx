import CloseIcon from '@/assets/icons/iocn_x_lg.svg';
import useResponsive from '@/hooks/useResponsive';

interface NotificationProps {
  closeNotificationModal: () => void;
}

const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => e.preventDefault();

export default function NotificationModal({
  closeNotificationModal,
}: NotificationProps) {
  const { isMobile } = useResponsive();
  return (
    <div
      className="absolute top-[82px] m-auto w-full max-w-[1200px] bg-slate-500 mobile:fixed mobile:top-0 mobile:h-full"
      onMouseDown={onMouseDown}
    >
      <div
        className={`notification-modal-base ${isMobile ? 'notification-modal-mobile' : 'notification-modal-pc'}`}
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-kv-xl font-kv-semibold">알림 N개</h2>
          <button onClick={closeNotificationModal}>
            <CloseIcon className="icon-size" />
          </button>
        </div>
        {/* TODO 예약 현황 알림 리스트 */}
      </div>
    </div>
  );
}
