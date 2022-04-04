
const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className=" mb-10 mt-5 text-center text-lg ">
Añade Pacientes y
<span className="text-indigo-600 font-bold "> Administrados</span>
        </p>


<form className=" bg-white shadow-md  rounded-lg py-10 px-5 m " >        

<div>

<div className="mb-5">
    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
    <input id="mascota"  type="text" 
    placeholder="Nombre de la mascota" 
    className="border-2 w-full p-2 placeholder-grey-400 rounded-md mt-1"/>
</div >

<div className="mb-5">
  <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
    <input id="propietario"  type="text" 
    placeholder="Nombre del propietario" 
    className="border-2 w-full p-2 placeholder-grey-400 rounded-md mt-1"/>
</div>

<div className="mb-5">
  <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
    <input id="email"  type="email" 
    placeholder="Email del propietario" 
    className="border-2 w-full p-2 placeholder-grey-400 rounded-md mt-1"/>
</div>

<div className="mb-5">
  <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
    <input id="alta"  type="date" 
    
    className="border-2 w-full p-2 placeholder-grey-400 rounded-md mt-1"/>
</div>

<div className="mb-5">
  <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">sintomas</label>
   <textarea  id="sintomas"className="border-2 w-full p-2 placeholder-grey-400 rounded-md mt-1" placeholder="Describa los sintomas" ></textarea>
</div>

</div>

<input  type="summit" 
value="Agregar Paciente" 
className="t  hover:bg-indigo-700 cursor-pointer bg-indigo-600 w-full p-3 text-white text-center " />

</form>



    </div>
  )
}

export default Formulario
