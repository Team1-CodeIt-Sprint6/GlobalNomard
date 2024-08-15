import Button from '@/components/common/Button';

export default function MyActivityList() {
  function handleClickButton() {}

  return (
    <div>
      <div className="mb-4 flex h-[53px] w-[344px] items-center justify-between pc:w-[792px] tablet:w-[429px]">
        <h1 className="font-kv-bold kv-text-3xl">내 체험 관리</h1>
        <Button
          type="button"
          className="btn-blue h-[48px] w-[120px]"
          onClick={handleClickButton}
        >
          체험 등록하기
        </Button>
      </div>
    </div>
  );
}
