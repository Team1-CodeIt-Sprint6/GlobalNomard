import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import Image from 'next/image';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import RatingStar from '../../../public/assets/icons/icon_star.svg';

const mockData = [
  {
    id: 2252,
    userId: 753,
    title: '어린이 도자기 만들기 체험 교실',
    description: '둠칫 둠칫 두둠칫',
    category: '투어',
    price: 5000,
    address: '서울특별시 강남구 테헤란로 427',
    bannerImageUrl:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/6-1_753_1723460264067.jpeg',
    rating: 4.5,
    reviewCount: 4,
    createdAt: '2024-08-12T23:11:17.148Z',
    updatedAt: '2024-08-12T23:54:19.739Z',
  },
  {
    id: 2249,
    userId: 753,
    title: '동글동글 비눗방울 체험',
    description: '둠칫 둠칫 두둠칫',
    category: '투어',
    price: 5000,
    address: '서울특별시 강남구 테헤란로 427',
    bannerImageUrl:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/6-1_753_1723460264067.jpeg',
    rating: 4.5,
    reviewCount: 4,
    createdAt: '2024-08-12T20:00:36.716Z',
    updatedAt: '2024-08-12T23:06:58.945Z',
  },
  {
    id: 2201,
    userId: 720,
    title: 'k-공포 체험',
    description: '무셔',
    category: '투어',
    price: 14000,
    address: '서울 마포구 와우산로17길 11',
    bannerImageUrl:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/6-1_720_1723206216485.jpeg',
    rating: 3.75,
    reviewCount: 4,
    createdAt: '2024-08-09T21:23:36.724Z',
    updatedAt: '2024-08-11T00:43:03.523Z',
  },
  {
    id: 2253,
    userId: 753,
    title: '상하 농원 어린이 피자 만들기 체험 교실',
    description: '둠칫 둠칫 두둠칫',
    category: '투어',
    price: 5000,
    address: '서울특별시 강남구 테헤란로 427',
    bannerImageUrl:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/6-1_753_1723474750993.jpeg',
    rating: 0,
    reviewCount: 0,
    createdAt: '2024-08-13T00:03:20.224Z',
    updatedAt: '2024-08-13T00:03:20.224Z',
  },
  {
    id: 2227,
    userId: 720,
    title: 'K-POP 댄스 클래스',
    description:
      '전문가에게 K-POP 안무를 배우고 나만의 스타일의 숏츠를 완성하는 숏츠 클래스!\n\n코엑스를 탐방하며 다양한 K-POP 문화를 경험해보세요. \n\n\n\n서울에서 글로벌 K-POP Culture의 매력을 알아보는 시간을 제공해드립니다.',
    category: '관광',
    price: 50000,
    address: '서울 강남구 영동대로 513',
    bannerImageUrl:
      'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/activity_registration_image/6-1_720_1723291640198.jpeg',
    rating: 0,
    reviewCount: 0,
    createdAt: '2024-08-10T21:07:20.565Z',
    updatedAt: '2024-08-10T21:26:52.840Z',
  },
];

export default function BestExperienceList() {
  return (
    <ul className="relative flex max-h-[454px] max-w-[696px] justify-center rounded-xl">
      <Swiper
        loop={true}
        spaceBetween={50}
        effect={'fade'}
        slidesPerView={1}
        modules={[EffectFade, Navigation]}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev',
        }}
      >
        {mockData.map((v) => {
          return (
            <SwiperSlide>
              <li
                key={v.id}
                className="relative flex h-[219px] max-h-[454px] w-[335px] max-w-[696px] flex-col items-center px-0 pc:mx-[50px] pc:h-[410px] pc:w-[640px] tablet:h-[454px] tablet:w-[696px]"
              >
                <div className="absolute flex h-[219px] w-[335px] pc:h-[410px] pc:w-[640px] tablet:h-[454px] tablet:w-[696px]">
                  <Image
                    fill
                    src={v.bannerImageUrl}
                    alt={v.title}
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute bottom-0 flex w-[100%] flex-col items-start gap-y-2 px-[20px] py-[20px] pc:gap-y-5 tablet:gap-y-5">
                  <span className="flex items-center gap-x-2">
                    <span className="flex gap-1 text-kv-yellow kv-text-md pc:kv-text-xl tablet:kv-text-xl">
                      <RatingStar />
                    </span>
                    {v.rating > 0 && v.reviewCount > 0 && (
                      <h3 className="flex gap-1 text-white kv-text-md pc:kv-text-xl tablet:kv-text-xl">
                        {v.rating} ({v.reviewCount})
                      </h3>
                    )}
                    <h3 className="flex text-white kv-text-xl"></h3>
                  </span>
                  <h2 className="kv-text-bold w-[185px] max-w-[300px] break-all text-white kv-text-xl pc:w-[300px] pc:kv-text-3xl tablet:w-[300px] tablet:kv-text-3xl">
                    {v.title}
                  </h2>
                  <span className="flex gap-x-1 text-white kv-text-md pc:kv-text-xl tablet:kv-text-xl">
                    <h3 className="kv-text-bold">
                      ￦{v.price.toLocaleString()}
                    </h3>
                    <h3 className="kv-text-regular">/ 인</h3>
                  </span>
                </div>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute z-10 hidden gap-x-2 pc:bottom-[1px] pc:right-[20px] pc:flex tablet:bottom-[-10px] tablet:right-[40%] tablet:flex">
        <span className="review-swiper-button-prev flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-kv-primary-blue">
          &lt;
        </span>
        <span className="review-swiper-button-next flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-kv-primary-blue">
          &gt;
        </span>
      </div>
    </ul>
  );
}
