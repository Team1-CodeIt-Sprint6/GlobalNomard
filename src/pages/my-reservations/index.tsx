import MyReservationsDropdown from '@/components/MyReservationsPage/MyReservationsDropdown';
import useDropdown from '@/hooks/useDropdown';
import useMyReservationData from '@/hooks/useMyReservationData';

export default function MyReservations() {
  const dropdown = useDropdown('');
  const { availableValues } = useMyReservationData();

  return (
    <div className="flex min-w-[342px] flex-col">
      <div className="mb-[32px]">
        <h1 className="text-kv-3xl font-kv-bold">예약 현황</h1>
      </div>
      <div className="mb-[24px] h-[56px]">
        <MyReservationsDropdown
          label="체험명"
          value={dropdown.value}
          availableValues={availableValues}
          placeholder="체험명을 선택해주세요"
          isOpen={dropdown.isOpen}
          onClickButton={dropdown.onClickButton}
          onBlurButton={dropdown.onBlurButton}
          onClickMenu={dropdown.onClickMenu}
        />
      </div>
      <div className="h-[872px] bg-kv-gray-200">달력</div>
    </div>
  );
}
