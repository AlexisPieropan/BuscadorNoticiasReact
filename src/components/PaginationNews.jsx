import Pagination from "react-bootstrap/Pagination";
import "./PaginationNews.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Paginado(props) {
  const setPageNext = () => {
    if (props.page < props.totalPages) {
      props.setPage(props.page + 1);
    } else {
      return null;
    }
  };

  const setPagePrevious = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    } else {
      return null;
    }
  };

  const setFirstPage = () => {
    props.setPage(1);
  };

  const setLastPage = () => {
    props.setPage(props.totalPages);
  };

  if (props.maxResults) {
    return (
      <Pagination>
        <Pagination.First onClick={setFirstPage} />
        <Pagination.Item onClick={setPagePrevious}>
          {props.page - 1}
        </Pagination.Item>
        <Pagination.Item active>{props.page}</Pagination.Item>
        <Pagination.Last disabled />
      </Pagination>
    );
  }

  if (props.page > 1) {
    if (props.page === props.totalPages) {
      return (
        <Pagination>
          <Pagination.First onClick={setFirstPage} />
          <Pagination.Item onClick={setPagePrevious}>
            {props.page - 1}
          </Pagination.Item>
          <Pagination.Item active>{props.page}</Pagination.Item>
          <Pagination.Last disabled />
        </Pagination>
      );
    }
    return (
      <Pagination>
        <Pagination.First onClick={setFirstPage} />
        <Pagination.Item onClick={setPagePrevious}>
          {props.page - 1}
        </Pagination.Item>
        <Pagination.Item active>{props.page}</Pagination.Item>
        <Pagination.Item onClick={setPageNext}>
          {props.page + 1}
        </Pagination.Item>
        <Pagination.Last disabled />
      </Pagination>
    );
  }

  if (props.page === 1 && props.totalPages) {
    return (
      <Pagination>
        <Pagination.First disabled />
        <Pagination.Item active>{props.page}</Pagination.Item>
        <Pagination.Item onClick={setPageNext}>
          {props.page + 1}
        </Pagination.Item>
        <Pagination.Last disabled onClick={setLastPage} />
      </Pagination>
    );
  }

  return (
    <Pagination>
      <Pagination.First disabled />
      <Pagination.Item active>{props.page}</Pagination.Item>
      <Pagination.Last disabled />
    </Pagination>
  );
}

export default Paginado;
