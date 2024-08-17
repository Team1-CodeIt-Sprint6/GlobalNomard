import { useEffect, useState } from 'react';

import ChevronDown from '@/assets/icons/icon-arrow-down.svg';

interface InfiniteScrollHintProps {
  hasNextPage: boolean;
}

export default function InfiniteScrollHint({
  hasNextPage,
}: InfiniteScrollHintProps) {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      return setShowHint(false);
    }, 3 * 1000);
    return () => clearTimeout(timer);
  }, [hasNextPage]);

  return (
    <div className="h-[10px]">
      {showHint && hasNextPage && (
        <div className="align-center">
          <ChevronDown className="h-6 w-6 animate-bounce text-kv-primary-blue" />
        </div>
      )}
    </div>
  );
}
