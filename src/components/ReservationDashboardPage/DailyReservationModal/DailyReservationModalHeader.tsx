import CloseIcon from '@/assets/icons/iocn_x_lg.svg';

export default function DailyReservationModalHeader() {
  return (
    <div className="mx-auto mt-[24px] flex h-[40px] w-[381px] items-center justify-between">
      <h1 className="text-kv-2xl font-kv-bold">예약 정보</h1>
      <CloseIcon className="size-[40px]" />
    </div>
  );
}
