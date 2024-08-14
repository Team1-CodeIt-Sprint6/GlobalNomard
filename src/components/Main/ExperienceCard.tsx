import Image from 'next/image';

import { ActivityListItem } from '@/types/activityTypes';

import RatingStar from '../../../public/assets/icons/icon_star_md.svg';

export default function ExperienceCard({ data }: { data: ActivityListItem }) {
  const { id, bannerImageUrl, title, rating, price, reviewCount } = data;
  return (
    <li key={id} className="flex flex-col">
      <span className="relative h-[168px] w-[168px] rounded-lg pc:h-[283px] pc:w-[283px] tablet:h-[221px] tablet:w-[221px]">
        <Image
          fill
          src={bannerImageUrl}
          alt={title}
          className="absolute rounded-lg"
        />
      </span>
      <span className="flex items-center gap-x-1">
        <RatingStar />
        <h3 className="font-kv-bold">{rating}</h3>
        <h3 className="font-kv-bold">({reviewCount})</h3>
      </span>
      <span className="font-kv-bold kv-text-lg">{title}</span>
      <span className="flex gap-x-1 kv-text-lg">
        <h3 className="font-kv-bold">￦ {price.toLocaleString()}</h3>
        <h3> / 인</h3>
      </span>
    </li>
  );
}
