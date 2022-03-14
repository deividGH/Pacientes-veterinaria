const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = ()=>{
    const respuesta = confirm('¿Está seguro de eliminar el paciente?')

    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="bg-white shadow-md mx-5 my-10 px-5 py-10 rounded-xl">
      <p className="font-bold uppercase text-gray-700 mb-3">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3">
        Fecha de alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold uppercase text-gray-700 mb-3">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-900 rounded font-bold text-white uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-900 rounded font-bold text-white uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
