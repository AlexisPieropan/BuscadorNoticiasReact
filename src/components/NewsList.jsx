//Componente que renderiza la lista de noticias

import { useEffect, useState } from "react";
import { getNews } from "../functions/getNews";
import News from "./News";
import Spinner from "react-bootstrap/Spinner";
import Paginado from "./PaginationNews";

const NewsList = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [maxResults, setMaxResults] = useState(false);
  const pageSize = 10;
  const seteartotalPages = () => {
    if (totalResults % pageSize === 0) {
      return Math.trunc(totalResults / pageSize) - 10;
    }
    return Math.trunc(totalResults / pageSize) + 1;
  };

  const totalPages = seteartotalPages();

  const getNoticiasDesdeServicio = async (search, page, pageSize) => {
    setLoading(true);
    const respuesta = await getNews(search, page, pageSize);
    setNews(respuesta.articles);
    setTotalResults(respuesta.totalResults);
    setMaxResults(false);
    if (respuesta.code === "maximumResultsReached") setMaxResults(true);
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    if (search) {
      getNoticiasDesdeServicio(search, page, pageSize);
    }
  }, [page, search]);

  if (loading) {
    return <Spinner animation="border" variant="warning" />;
  }

  return (
    <>
      <News
        page={page}
        news={news}
        pageSize={pageSize}
        dataLength={totalResults}
        maxResults={maxResults}
      />
      {totalResults > 1 && (
        <Paginado
          page={page}
          setPage={setPage}
          totalResults={totalResults}
          totalPages={totalPages}
          maxResults={maxResults}
          pageSize={pageSize}
        />
      )}
    </>
  );
};

export default NewsList;
