import CloseIcon from '@/assets/icons/iocn_x_lg.svg';
import instance from '@/lib/apis/axios';
import { formatTimeAgo } from '@/lib/utils/formatTimeAge';

interface NotificationProps {
  content: string;
  updatedAt: string;
  notificationId: number;
  refetchNotifications: () => void;
}

export const deleteNotification = async (notificationId: number) => {
  await instance.delete(`/my-notifications/${notificationId}`);
};

export default function Notification({
  content,
  updatedAt,
  notificationId,
  refetchNotifications,
}: NotificationProps) {
  const timeAgo = formatTimeAgo(updatedAt);

  const highlightedContent = content.split(/(승인|거절)/).map((part, index) => {
    const textColor =
      part === '승인' ? 'text-kv-blue' : part === '거절' ? 'text-kv-red' : '';

    return (
      <span key={index} className={textColor}>
        {part}
      </span>
    );
  });

  const handleDelete = async () => {
    await deleteNotification(notificationId);
    refetchNotifications();
  };

  return (
    <div className="relative mb-2 rounded-[5px] border border-kv-gray-400 bg-white px-3 py-4">
      <span className="block h-[5px] w-[5px] rounded bg-kv-blue" />
      <p className={`mt-4 break-keep text-kv-md`}>{highlightedContent}</p>
      <span className="text-kv-xs text-kv-gray-600">{timeAgo}</span>
      <button
        className="absolute right-3 top-3 text-kv-gray-a1"
        onClick={handleDelete}
      >
        <CloseIcon className="icon-size" />
      </button>
    </div>
  );
}
