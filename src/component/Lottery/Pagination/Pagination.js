import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ skip, setSkip, getGameHistory }) => (
  <>
    <Pagination>
      <Pagination.Prev onClick={() => (skip > 0 ? setSkip(skip - 1) : "")} />
      <Pagination.Item>{skip + 1}</Pagination.Item>
      <Pagination.Item className="slash">/</Pagination.Item>
      <Pagination.Item>250</Pagination.Item>

      <Pagination.Next className="last_btn" onClick={() => setSkip(skip + 1)} />
    </Pagination>
  </>
);

export default PaginationComponent;
