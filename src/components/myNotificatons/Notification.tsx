import CloseIcon from '@/assets/icons/iocn_x_lg.svg';
import { formatTimeAgo } from '@/lib/utils/formatTimeAge';

interface NotificationProps {
  content: string;
  updatedAt: string;
}

export default function Notification({
  content,
  updatedAt,
}: NotificationProps) {
  const timeAgo = formatTimeAgo(updatedAt);

  return (
    <div className="relative mb-2 rounded-[5px] border border-kv-gray-400 bg-white px-3 py-4">
      <span className="block h-[5px] w-[5px] rounded bg-kv-blue" />
      <p className="mt-4 break-keep text-kv-md">{content}</p>
      <span className="text-kv-xs text-kv-gray-600">{timeAgo}</span>
      <button className="absolute right-3 top-3 text-kv-gray-a1">
        <CloseIcon className="icon-size" />
      </button>
    </div>
  );
}
