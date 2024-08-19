import CloseIcon from '@/assets/icons/icon_x_lg.svg';
import useFetchData from '@/hooks/useFetchData';
import useResponsive from '@/hooks/useResponsive';
import { getMyNotifications } from '@/lib/apis/getApis';
import { getUserData } from '@/lib/apis/userApis';

import Notification from './Notification';

interface NotificationProps {
  closeNotificationModal: () => void;
}

const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => e.preventDefault();

export default function NotificationModal({
  closeNotificationModal,
}: NotificationProps) {
  const { isMobile } = useResponsive();

  // 유저 데이터 가져오기
  const { data: user } = useFetchData(['user'], getUserData, {});

  // 알림 데이터 가져오기
  const { data: notificationData, refetch } = useFetchData(
    ['userNotification'],
    getMyNotifications,
    {},
  );

  const notifications = notificationData?.notifications;

  const userNotifications = notifications?.filter(
    (notification) => notification.userId === user?.id,
  );

  const isNotifications = userNotifications && userNotifications.length > 0;

  return (
    <div
      className="absolute top-[82px] m-auto w-full max-w-[1200px] bg-slate-500 mobile:fixed mobile:top-0 mobile:h-full"
      onMouseDown={onMouseDown}
    >
      <div
        className={`notification-modal-base ${isMobile ? 'notification-modal-mobile' : 'notification-modal-pc'} `}
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-kv-xl font-kv-semibold">
            알림 {notificationData?.totalCount}개
          </h2>
          <button onClick={closeNotificationModal}>
            <CloseIcon className="icon-size" />
          </button>
        </div>
        <ul className="overflow-y-scroll-custom scrollbar-none-custom sm:max-h-[408px]">
          {isNotifications ? (
            userNotifications.map((notification) => (
              <li className="list-none">
                <Notification
                  key={notification.id}
                  content={notification.content}
                  updatedAt={notification.updatedAt}
                  notificationId={notification.id}
                  refetchNotifications={refetch}
                />
              </li>
            ))
          ) : (
            <p>알림이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
