import { useForm } from "react-hook-form";
import clsx from "clsx";
import { useState } from "react";

export default function App (){
const [users,setUsers]=useState([])
const {register,handleSubmit,formState:{errors,isValid,isSubmitted},reset}=useForm()

function onSubmit(data){
console.log("data",data)
reset()
setUsers([...users,{nombre: data.firstName, apellido: data.LastName, correo: data.email }])
}

function removeTodo(indexToRemove){

   const newUsers=users.filter((user,idx)=>idx!==indexToRemove)
   setUsers(newUsers)
 }
return(
  <main className="w-full min-h-screen">
    <p className="w-full bg-teal-600 text-black font-bold text-center p-2">Lista de koders</p>
    <form className="flex flex-row gap-2 justify-center p-5"
    onSubmit={handleSubmit(onSubmit)}
    >
      <input type="text" className={clsx("p-2 rounded text-black w-full max-w-screen-sm ",{"border-2 border-red-500 bg-red-300":errors.firstName})}
      placeholder="Ingresa tu nombre"
      {...register("firstName", {
        required:{value:true,message:"campo requerido"},
        minLength:{value:3, message:"minimo tres letras de nombre"},
        maxLength:{value:180, message:"maximo 180 caracteres"}  
      }
      )}/>
       <input type="text" className={clsx("p-2 rounded text-black w-full max-w-screen-sm",{"border-2 border-red-500 bg-red-300":errors.LastName})}
      placeholder="Ingresa tu/tus apellidos"
      {...register("LastName", {
        required:{value:true,message:"campo requerido"},
        minLength:{value:3, message:"minimo tres letras del apellido"},
        maxLength:{value:180, message:"maximo 180 caracteres"}  
      }
      )}
      />
       <input type="text" className={clsx("p-2 rounded text-black w-full max-w-screen-sm",{"border-2 border-red-500 bg-red-300":errors.email})}
      placeholder="Ingresa tu correo"
      {...register("email", {
        required:{value:true,message:"campo requerido"}, 
        pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"correo invalido"} 
      }
      )}
      />
     <button className="text-black px-3 rounded bg-white flex flex-col">Agregar</button> 
    </form>
    <div className="flex  items-center flex-col w-[100%] pl-[50px] pr-[50px] border-solid border-[red]">
    {errors.firstName &&(
      <p className="w-[245px] border-solid border-2 border-[red] ">{errors.firstName?.message}</p>
    
       )}
        {errors.LastName &&(
       <p className="w-[245px] border-solid border-2 border-[red]">{errors.LastName?.message}</p>
       )}
        {errors.email &&(
       <p className="w-[245px] border-solid border-2 border-[red]">{errors.email?.message}</p>
       )}
      </div>
    <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
    { users.length===0 && (<p className="text-white/50">No hay koders agregados</p>)}
    {users.length>0 && ( users.map((user,idx)=>{
            return(
              <div key={`todo-${idx}`} className="bg-white/10 rounded p-4 flex flex-row justify-between">
                <span>Nombre: <span className="select-none">{user.nombre}</span></span>
               <span>Apellido: <span className="select-none">{user.apellido}</span></span>
               <span>Email: <span className="select-none">{user.correo}</span></span>
               <span className="text-red-500" onClick={()=>removeTodo(idx)}>X</span>
              </div>
            )
          }))}
    </div>
  </main>
)

}