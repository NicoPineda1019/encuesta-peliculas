import React, { Fragment } from "react";
import Error from "./Error";
import { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [name, setName] = useState("");
  const [movie, setMovie] = useState("")
  const [isError, setIsError] = useState(false)
  const [showCard, setShowCard] = useState(false)

  const sendForm = (e) => {
    e.preventDefault()
    if (name.length < 2 || name.startsWith(' ')) {
        setShowCard(false)
        return setIsError(true)
    }
    if (movie.length < 5) {
        setShowCard(false)
        return setIsError(true)
    }
    setIsError(false)
    setShowCard(true)

  }
  return (
    <Fragment>
      <form className="form" onSubmit={sendForm}>
        <label className="label">Nombre</label>
        <input
          type="text"
          className="input"
          placeholder="Ingresa tú nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="label">Película</label>
        <input type="text" className="input" placeholder="Ingrea tú película" onChange={(e) => setMovie(e.target.value)} />
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
      { isError && <Error message={"Por favor verifica que la información sea correcta"} />}
      { showCard && <Card name={name} movie={movie}/>} 
    </Fragment>
  );
};

export default Formulario;
