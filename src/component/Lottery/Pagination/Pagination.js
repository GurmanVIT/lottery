import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({ skip, setSkip, getGameHistory }) => (
  <>
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item>2</Pagination.Item>
      <Pagination.Item className="slash">/</Pagination.Item>
      <Pagination.Item>254</Pagination.Item>

      <Pagination.Next className="last_btn" />
    </Pagination>
  </>
);

export default PaginationComponent;
