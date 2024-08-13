import ArrowLeftIcon from '@/assets/icons/icon_arrow_left.svg';
import ArrowRightIcon from '@/assets/icons/icon_arrow_right.svg';

interface PagenationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
}: PagenationProps) {
  const PAGE_GROUP_SIZE = 5;

  // 현재 페이지 그룹 계산
  const currentGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);

  // 페이지 그룹 시작과 끝 페이지 번호
  const startPage = (currentGroup - 1) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);

  // 페이지 번호 배열 생성
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        className="pagenation-btn"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ArrowLeftIcon className="arrow-size" alt="이전 페이지" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagenation-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        className="pagenation-btn"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ArrowRightIcon className="arrow-size" alt="다음 페이지" />
      </button>
    </div>
  );
}
