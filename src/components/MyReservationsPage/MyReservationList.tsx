import React, { useCallback, useEffect, useState } from 'react';

import MyReservationCard from '@/components/common/ActivityCard/MyReservationCard';
import SortDropDown from '@/components/common/Dropdown/SortDropdown';
import instance from '@/lib/apis/axios';
import { MyReservation } from '@/types/get/reservationTypes';

const ReservationList = () => {
  const [reservations, setReservations] = useState<MyReservation[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextCursorId, setNextCursorId] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isFirstFetch, setIsFirstFetch] = useState(true);

  const fetchReservations = async () => {
    setLoading(true);
    try {
      const url = nextCursorId
        ? `/my-reservations?cursorId=${nextCursorId}&size=10`
        : `/my-reservations?size=10`;
      const { data } = await instance.get(url);

      setReservations((prevReservations) =>
        isFirstFetch
          ? data.reservations
          : [...prevReservations, ...data.reservations],
      );
      setNextCursorId(data.cursorId);
      setIsFirstFetch(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const threshold = document.documentElement.offsetHeight - 100;

    if (scrollPosition < threshold || loading || nextCursorId === null) {
      return;
    }
    fetchReservations();
  }, [loading, nextCursorId, fetchReservations]);

  const handleFilterSelect = (option: string) => {};

  useEffect(() => {
    fetchReservations();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-kv-bold kv-text-3xl">예약 내역</h1>
        <SortDropDown
          label="필터"
          options={[
            '예약 신청',
            '예약 취소',
            '예약 승인',
            '예약 거절',
            '체험 완료',
          ]}
          onSelect={handleFilterSelect}
        />
      </div>
      <div>
        {reservations.map((reservation) => (
          <MyReservationCard
            key={reservation.id}
            reservation={reservation}
            onReviewClick={() => {}}
            onCancelClick={() => {}}
          />
        ))}
      </div>
      {loading && <div>Loading more...</div>}
    </div>
  );
};

export default ReservationList;
