import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="mt-5 mb-10 text-center text-xl">
          Administra tus{" "}
          <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map( paciente =>(
          <Paciente
            key={paciente.id}
            paciente = {paciente}
            setPaciente= {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
          ))}
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">Aún no hay pacientes</h2>
          <p className="mt-5 mb-10 text-center text-xl">
          Agrega pacientes{" "}
          <span className="text-indigo-600 font-bold">y los verás aquí</span>
          </p>
        </>
      )}
      
      
    </div>
  )
}

export default ListadoPacientes;

//rafce
//rfcp
