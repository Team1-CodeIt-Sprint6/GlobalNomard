import { useCallback, useEffect, useRef, useState } from 'react';

import { getMyReservations } from '@/lib/apis/getApis';
import { MyReservation } from '@/types/get/reservationTypes';

const useInfiniteScrollReservation = (initialStatus: string | null) => {
  const [reservations, setReservations] = useState<MyReservation[]>([]);
  const [nextCursorId, setNextCursorId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(initialStatus);
  const loadingRef = useRef(false);

  const fetchReservations = useCallback(
    async (isResetFetch: boolean = false) => {
      if (loadingRef.current) return;

      loadingRef.current = true;
      try {
        const data = await getMyReservations(
          isResetFetch ? null : nextCursorId,
          status,
        );
        setReservations((prevReservations) =>
          isResetFetch
            ? data.reservations
            : [...prevReservations, ...data.reservations],
        );
        setNextCursorId(data.cursorId);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        loadingRef.current = false;
      }
    },
    [nextCursorId, status],
  );

  const handleScroll = useCallback(() => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const threshold = document.documentElement.offsetHeight - 100;

    if (
      scrollPosition < threshold ||
      loadingRef.current ||
      nextCursorId === null
    ) {
      return;
    }
    fetchReservations();
  }, [loadingRef.current, nextCursorId, fetchReservations]);

  useEffect(() => {
    fetchReservations(true);
  }, [status]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const updateStatus = (newStatus: string | null) => {
    setNextCursorId(null);
    setStatus(newStatus);
  };

  return {
    reservations,
    loading: loadingRef.current,
    error,
    setError,
    fetchReservations,
    updateStatus,
  };
};

export default useInfiniteScrollReservation;
