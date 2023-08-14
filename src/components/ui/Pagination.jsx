import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

// const PaginationButton = styled.button`
//   background-color: ${(props) =>
//     props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
//   color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};

//   border: none;
//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.4rem;
//   padding: 0.6rem 1.2rem;
//   transition: all 0.3s;

//   &:has(span:last-child) {
//     padding-left: 0.4rem;
//   }

//   &:has(span:first-child) {
//     padding-right: 0.4rem;
//   }

//   & svg {
//     height: 1.8rem;
//     width: 1.8rem;
//   }

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;

function Pagination({ count }) {
  const PAGE_SIZE = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  //   if (pageCount <= 1) return null;

  const PaginationButtonStyle =
    "flex items-center justify-center gap-1 rounded-sm border-none px-2  py-1 text-base font-medium transition-all  duration-300 hover:bg-emerald-300 hover:text-emerald-50  disabled:text-stone-200 disabled:hover:bg-gray-50";

  return (
    <div className="flex w-full items-center justify-between">
      <p className=" ml-5 text-sm">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div role="group" className="mr-2 flex gap-1">
        <button
          className={PaginationButtonStyle}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <HiChevronLeft /> <span>Previous</span>
        </button>

        <button
          className={PaginationButtonStyle}
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
