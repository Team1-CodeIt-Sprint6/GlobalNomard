import useDailyReservationData from '@/hooks/useDailyReservationData';
// import { useEffect } from 'react';

export default function DailyReservationModal() {
  // const { data } = useDailyReservationData();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="z-10 h-[697px] w-[429px] rounded-3xl border border-kv-gray-300 bg-white">
      <div className="mx-auto mt-[24px] h-[40px] w-[381px] border border-gray-300">
        타이틀과 닫기 버튼
      </div>
      <div className="mt-[27px] flex h-[42px] w-full items-center border-b border-b-kv-gray-300 pl-[21px]">
        <div className="status-tap-base status-active">신청</div>
        <div className="status-tap-base">승인</div>
        <div className="status-tap-base">거절</div>
      </div>
      <div className="mx-auto mt-[27px] h-[130px] w-[381px] border border-kv-gray-300">
        날짜 선택
      </div>
      <div className="mx-auto mt-[27px] h-[294px] w-[381px] border border-kv-gray-300">
        리스트
      </div>
    </div>
  );
}
