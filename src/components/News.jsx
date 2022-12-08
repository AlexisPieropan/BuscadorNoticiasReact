//Componente que renderiza una noticia

import NewsCard from "./NewsCard";
import { Alert } from "react-bootstrap";
import "../App.css";

function News({ page, pageSize, news, totalResults, maxResults }) {
  const finalNews = totalResults - pageSize * (page - 1);
  const messageResults = () => {
    if (totalResults) {
      return (
        <div className="container-tag">
          <Alert variant="info">
            Está viendo {totalResults > pageSize * page ? pageSize : finalNews}{" "}
            news de {totalResults} resultados.
          </Alert>
        </div>
      );
    }
  };

  const messageAlert = () => {
    if (maxResults) {
      return "Limite de cuenta developer.";
    }
    return "No se encontraron noticias relacionadas.";
  };

  return (
    <>
      <div className="container noticia" role="news">
        <div className="container-info">{messageResults()}</div>
        {news && news.length > 0 ? (
          news.map((item, index) => {
            return <NewsCard item={item} key={index} />;
          })
        ) : (
          <div className="container-alert">
            <Alert variant="danger">{messageAlert}</Alert>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
