import { SubmitHandler, useForm } from 'react-hook-form';

import SearchButton from '@/assets/icons/icon_search.svg';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import BestExperience from './BestExperience';

export default function MainPageHeader() {
  const searchList = [
    '로컬투어',
    '힐링',
    '한국문화',
    '촌캉스',
    '액티비티',
    '이색체험',
    '시장',
  ];
  const { register, handleSubmit, getValues, setValue } = useForm();
  return (
    <div className="flex w-[100%] gap-x-3 bg-kv-primary-blue-light pc:px-[360px] pc:py-[79px]">
      <div className="flex max-w-[535px] flex-col gap-y-[20px]">
        <span className="w-[476px] break-all text-[56px] leading-[64px]">
          요즘 뜨는 국내 여행 취향에 맞게 즐겨요
        </span>
        <form className="flex flex-col gap-x-2 pc:flex-row pc:items-center pc:justify-start">
          <Input
            {...register('search')}
            type="search"
            className="h-[56px] w-[336px] rounded-3xl border-[1px] border-kv-primary-blue px-[20px] py-[14px]"
            placeholder="원하는 여행 상품을 찾아보세요"
          />
          <Button className="kv-text-regular flex h-[56px] w-[140px] items-center justify-center gap-x-2 rounded-3xl bg-kv-primary-blue text-white kv-text-2lg">
            <SearchButton />
            검색하기
          </Button>
        </form>
        <div className="flex flex-col gap-y-2">
          <span className="kv-text-bold text-kv-black kv-text-lg">
            # 이런 여행 테마로 검색해보세요!
          </span>
          <ul className="flex flex-wrap gap-3">
            {searchList.slice(0, 5).map((v) => (
              <li
                key={v}
                className="flex w-[127px] cursor-pointer items-center justify-center rounded-3xl border-[1px] border-kv-primary-blue bg-white px-7 py-4 kv-text-lg"
                onClick={() => {
                  setValue('search', v);
                }}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BestExperience />
    </div>
  );
}
