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
  const [status, setStatus] = useState<string | null>(null);

  const fetchReservations = async (reset: boolean = false) => {
    setLoading(true);
    try {
      let url = `/my-reservations?size=10`;
      if (nextCursorId && !reset) {
        url += `&cursorId=${nextCursorId}`;
      }
      if (status) {
        url += `&status=${status}`;
      }

      const { data } = await instance.get(url);

      setReservations((prevReservations) =>
        isFirstFetch || reset
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

  const handleFilterSelect = (option: string) => {
    const statusMapping: { [key: string]: string } = {
      '예약 신청': 'pending',
      '예약 취소': 'canceled',
      '예약 승인': 'confirmed',
      '예약 거절': 'declined',
      '체험 완료': 'completed',
    };
    const selectedStatus = statusMapping[option] || null;
    setStatus(selectedStatus);
    setNextCursorId(null);
    setIsFirstFetch(true);
    fetchReservations(true);
  };

  useEffect(() => {
    fetchReservations();
  }, [status]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mb-4 flex h-[53px] w-[344px] items-center justify-between pc:w-[792px] tablet:w-[429px]">
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
