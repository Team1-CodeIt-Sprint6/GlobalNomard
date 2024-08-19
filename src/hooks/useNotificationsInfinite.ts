import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { getMyNotifications } from '@/lib/apis/getApis';

const useNotificationsInfinite = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 100,
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ['notifications'],
      queryFn: ({ pageParam = undefined }) =>
        getMyNotifications({
          cursorId: pageParam as number | undefined,
          size: 10,
        }),
      staleTime: 0,
      gcTime: 0,
      getNextPageParam: (lastPage) => lastPage.cursorId || undefined,
      initialPageParam: undefined as number | undefined,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const notifications = data?.pages.flatMap((page) => page.notifications) || [];

  const totalCount = data?.pages[0]?.totalCount ?? 0;

  return {
    notifications,
    totalCount,
    ref,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  };
};

export default useNotificationsInfinite;
