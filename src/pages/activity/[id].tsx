import { useRouter } from 'next/router';
import { useState } from 'react';

import CustomKebab from '@/components/activity/CustomKebab';
import ImageGallery from '@/components/activity/ImageGallery';
import KakaoMap from '@/components/activity/KakaoMap';
import Location from '@/components/activity/Location';
import { ReviewRating } from '@/components/activity/Review';
import ReviewList from '@/components/activity/ReviewList';
import ReservationCard from '@/components/ActivityPage/ReservationCard';
import Pagination from '@/components/common/Pagination';
import useFetchData from '@/hooks/useFetchData';
import { getActivity, getActivityReview } from '@/lib/apis/getApis';
import { getUserData } from '@/lib/apis/userApis';
import { ActivityReviewsResponse } from '@/types/activityReviewTypes';
import { ActivityResponse } from '@/types/activityTypes';

const PAGE_LIMIT = 3;

export default function ActivityPage() {
  const router = useRouter();
  const activityId = Number(router.query.id);
  const [page, setPage] = useState(1);

  // 체험 상세 데이터 가져오기
  const { data: activityData } = useFetchData<ActivityResponse>(
    ['activity', activityId],
    () => getActivity(activityId),
    {
      enabled: !!activityId,
    },
  );

  // 유저 데이터 가져오기
  const { data: userData, isLoading } = useFetchData(['user'], getUserData, {});

  // 후기 데이터 가져오기
  const { data: reviewData } = useFetchData<ActivityReviewsResponse>(
    ['activityReview', activityId, page],
    () => getActivityReview(activityId, page),
    {
      enabled: !!activityId,
    },
  );

  // 후기 총 페이지 수 계산
  const totalPages = reviewData
    ? Math.ceil(reviewData.totalCount / PAGE_LIMIT)
    : 1;

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  if (isLoading) return <div>로딩중</div>;
  if (!activityData) return <div>존재하지 않는 체험입니다.</div>;

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <span>{activityData.category}</span>
          <h2 className="mb-4 mt-2 text-kv-3xl font-kv-bold mobile:text-kv-2xl">
            {activityData.title}
          </h2>
          <div className="flex items-center gap-3">
            <ReviewRating
              reviewCount={activityData.reviewCount}
              rating={activityData.rating}
            />
            <Location address={activityData.address} />
          </div>
        </div>
        {activityData.userId === userData?.id && (
          <CustomKebab activityId={activityId} />
        )}
      </div>

      <ImageGallery
        title={activityData.title}
        bannerImageUrl={activityData.bannerImageUrl}
        subImages={activityData.subImages}
      />
      <div className="flex justify-between gap-6 mobile:gap-0">
        <div className="w-4/5 mobile:w-full">
          <div className="top-line">
            <h3 className="activity-h3">체험 설명</h3>
            <p>{activityData.description}</p>
          </div>
          <div className="top-line">
            <KakaoMap address={activityData.address} />
            <Location address={activityData.address} />
          </div>
          <div className="top-line">
            <h3 className="activity-h3">후기</h3>
            {reviewData && reviewData.totalCount > 0 ? (
              <>
                <ReviewList
                  totalCount={reviewData.totalCount}
                  averageRating={reviewData.averageRating}
                  reviews={reviewData.reviews}
                  nickname={userData?.nickname || '익명 사용자'}
                  profileImageUrl={
                    userData?.profileImageUrl ||
                    '/assets/icons/icon_profile.svg'
                  }
                />
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              </>
            ) : (
              <p>작성된 후기가 없습니다.</p>
            )}
          </div>
        </div>
        <div className="mt-10">
          <ReservationCard />
        </div>
      </div>
    </>
  );
}
