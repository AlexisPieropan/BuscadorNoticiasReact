//Componente que renderiza el buscador de noticias

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";

export default function Searcher(props) {
  const [searchText, setSearchText] = useState("");
  const [messageSize, setMessageSize] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const onSearchChange = (evento) => {
    setSearchText(evento.target.value);
  };
  const onSearchClick = () => {
    setMessageSize(true);
    setMessageRequired(true);
    //Si hay al menos 1 caracter en el buscador setea el messageRequired en falso
    if (searchText.length > 0) {
      setMessageRequired(false);
    }
    //Si hay mas de 2 caracteres en el buscador setea el messageSize en falso
    if (searchText.length > 2) {
      props.onSearch(searchText);
      setMessageSize(false);
      setMessageRequired(false);
    }
  };

  const onSearchKey = (evento) => {
    if (evento.keyCode === 13) {
      evento.preventDefault();
      setMessageRequired(false);
      if (searchText.length < 1) {
        setMessageRequired(true);
      }
      setMessageSize(true);
      if (searchText.length > 2) {
        props.onSearch(searchText);
        setMessageSize(false);
        setMessageRequired(false);
      }
    }
  };

  //CASILLERO DE BUSQUEDA
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mb: 2, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        color="secondary"
        label="Busqueda"
        focused
        variant="outlined"
        value={searchText}
        onChange={onSearchChange}
        onKeyDown={onSearchKey}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        onClick={onSearchClick}
      >
        {" "}
        <SearchIcon />{" "}
      </Button>
      {messageRequired && (
        <Alert variant="filled" severity="error">
          Ingrese valor de busqueda
        </Alert>
      )}
      {messageSize && (
        <Alert variant="filled" severity="error">
          Ingrese como mínimo 3 caracteres
        </Alert>
      )}
    </Box>
  );
}
