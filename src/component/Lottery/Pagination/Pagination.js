import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({
  skip,
  setSkip,
  getGameHistory,
  limit,
  pageCount,
}) => (
  <>
    <div className="pagination_fixed ">
      <Pagination>
        <Pagination.Prev onClick={() => (skip > 0 ? setSkip(skip - 1) : setSkip(0))} />
        <Pagination.Item>{skip + 1}</Pagination.Item>
        <Pagination.Item className="slash">/</Pagination.Item>
        <Pagination.Item>{pageCount}</Pagination.Item>

        <Pagination.Next className="last_btn" onClick={() => skip < pageCount - 1 ? setSkip(skip + 1) : ""} />
      </Pagination>
    </div>
  </>
);

export default PaginationComponent;
