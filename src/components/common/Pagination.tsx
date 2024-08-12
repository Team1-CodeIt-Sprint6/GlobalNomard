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
  // 페이지 번호 배열 생성
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={currentPage === 1}
        className="pagenation-btn"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ArrowLeftIcon className="arrow-size" alt="왼쪽 화살표 아이콘" />
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
        <ArrowRightIcon className="arrow-size" alt="오른쪽 화살표 아이콘" />
      </button>
    </div>
  );
}
