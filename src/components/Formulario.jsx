import { useState, useEffect } from "react"; //Si es importante el ;
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //Aquí se declara el state, antes del return, SIEMPRE AL INICIO DEL COMPONENTE

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const key = Math.random().toString(36).substring(2);
    return key;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //OBJETO PACIENTE
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    };

    //EDITANDO
    if (paciente.id) {
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente: pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]); //Pasamos una copia y agregamos el objeto, así no modificamos el original
    }

    //REINICIAR EL FORMULARIO
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y
        <span className="text-indigo-600 font-bold "> Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5 "
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            {" "}
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="inputMascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            id="inputMascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inputPropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
          </label>
          <input
            id="inputPropietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inputEmail"
            className="block text-gray-700 uppercase font-bold"
          >
            Email del propietario
          </label>
          <input
            id="inputEmail"
            type="email"
            placeholder="Email del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="inputAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            id="inputAlta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full text-white font-bold uppercase p-3 hover:bg-indigo-900 cursor-pointer transition-all"
          value={paciente.id ? "Guardar cambios" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
