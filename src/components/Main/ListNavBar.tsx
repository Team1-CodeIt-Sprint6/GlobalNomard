import SortDropDown from '@/components/common/Dropdown/SortDropdown';

const category = ['문화·예술', '식음료', '스포츠', '투어', '관광', '웰빙'];
const sortList = ['낮은 순', '높은 순'];

export default function ListNavBar() {
  const sortByPrice = () => {};
  return (
    <div className="flex justify-between">
      <ul className="flex gap-x-2 pb-6">
        {category.map((v) => {
          return (
            <li
              key={v}
              className="flex w-[127px] cursor-pointer items-center justify-center rounded-xl border-[1px] border-kv-primary-blue-light bg-white px-4 py-3 kv-text-lg"
            >
              {v}
            </li>
          );
        })}
      </ul>
      <SortDropDown
        label="가격"
        options={sortList}
        onSelect={sortByPrice}
        className="absolute"
      ></SortDropDown>
    </div>
  );
}
