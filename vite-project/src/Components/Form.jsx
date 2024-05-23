import { useState } from "react"
import Card from "./Card";


const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    musica: "",
  });

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleName = (event) => setUsuario({...usuario, nombre: event.target.value});
  const handleApellido = (event) => setUsuario({...usuario, apellido: event.target.value});
  const handleMusica = (event) => setUsuario({...usuario, musica: event.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(usuario.nombre.trim().length > 3
    && usuario.apellido.trim().length > 3
    && usuario.musica.trim().length > 6) {
      setShow(true)
      setError(false)
    } else{
      setError(true)
    }
  };

  return (
    <>
        <h1>Tu música favorita</h1>
        <form onSubmit={handleSubmit} style={{backgroundColor: "#b0b0b0"}}>
            <label>Tu nombre</label>
            <input type="text" value={usuario.nombre} onChange={handleName}/>
            <label>Tu apellido</label>
            <input type="text" value={usuario.apellido} onChange={handleApellido}/>
            <label >Canción favorita</label>
            <input type="text" value={usuario.musica} onChange={handleMusica}/>
            <button>Enviar</button>
        </form>

        {show && <Card usuario={usuario} />}
        {error && (
          <p style={{color: "red"}}>
            Por favor chequea que la información sea correcta!
          </p>
        )}
    </>
  )
}

export default Form