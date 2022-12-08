//Componente que renderiza la tarjeta de noticia

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function NewsCard({ item }) {
  const { DateTime } = require("luxon");
  const getPublished = (date) => {
    let dia = DateTime.fromISO(date).setZone("UTC").toFormat("dd-MM-yyyy");

    let hora = DateTime.fromISO(date).setZone("UTC").toFormat("HH:mm");

    return `Publicado el: ${dia} a las ${hora} hs`;
  };

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: 500 }} className="card-news">
        {item.urlToImage ? (
          <CardMedia component="img" image={item.urlToImage} alt="imagen" />
        ) : (
          <CardMedia
            component="img"
            image="https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
            alt="imagen"
          />
        )}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="h7" component="div">
            De {item.source.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions className="card-footer">
          <Button size="small" href={item.url} target="_blank">
            IR A LA NOTICIA
          </Button>
          <Typography variant="body2" color="text.secondary">
            {getPublished(item.publishedAt)}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

export default NewsCard;
