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
    <div className="flex w-[100%] flex-col gap-x-3 bg-kv-primary-blue-light px-[20px] py-[20px] pc:flex-row pc:px-[360px] pc:py-[79px] tablet:flex-col tablet:items-center tablet:justify-center tablet:gap-y-3 tablet:px-[24px] tablet:pb-[60px] tablet:pt-[80px]">
      <div className="flex max-w-[535px] flex-col items-center justify-center pc:gap-y-[15px]">
        <span className="flex w-[190px] break-all text-center text-kv-2xl pc:w-[476px] pc:text-left pc:text-[56px] pc:leading-[64px] tablet:flex tablet:w-[476px] tablet:justify-center tablet:text-center tablet:text-[56px] tablet:leading-[64px]">
          요즘 뜨는 국내 여행 취향에 맞게 즐겨요
        </span>
        <form className="flex flex-col items-center justify-center gap-x-2 gap-y-3 py-[20px] pc:flex-row pc:items-center pc:justify-start tablet:flex-row tablet:justify-center tablet:pb-[20px]">
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
        <div className="hidden flex-col gap-y-2 pc:flex">
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
