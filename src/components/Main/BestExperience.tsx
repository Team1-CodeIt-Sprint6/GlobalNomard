import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import Image from 'next/image';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

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
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={50}
        effect={'fade'}
        slidesPerView={1}
        modules={[EffectFade, Navigation]}
        className="relative"
      >
        {mockData.map((v) => {
          return (
            <SwiperSlide>
              <div className="relative mx-[50px] flex min-h-[410px] min-w-[640px] flex-col">
                <Image
                  fill
                  src={v.bannerImageUrl}
                  alt={v.title}
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 flex flex-col px-[20px] py-[20px]">
                  <h2 className="kv-text-bold max-w-[300px] text-white kv-text-3xl">
                    {v.title}
                  </h2>
                  <span className="flex gap-1 text-white kv-text-xl">
                    <h3 className="kv-text-bold">
                      ￦{v.price.toLocaleString()}{' '}
                    </h3>
                    <h3 className="kv-text-regular">/ 인</h3>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="z-999 flex h-[50px] w-[100px] gap-x-2 bg-kv-red">
        <button
          className="z-2 absolute bg-white text-black kv-text-xl"
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="z-2 absolute bg-white text-black kv-text-xl"
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
