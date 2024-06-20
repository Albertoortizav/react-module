import { useState } from "react"
import { useForm } from "react-hook-form"
import clsx from "clsx"
export default function RHF(){

  const[todos,setTodos]=useState([])
  //const[text,setText]=useState("")

const {register,handleSubmit, formState:{errors,isValid,isSubmitted},}=useForm()

  function removeTodo(indexToRemove){
   // todos.splice(indexToRemove,1)
    //setTodos([...todos])
    const newTodos=todos.filter((todo,idx)=>idx!==indexToRemove)
    setTodos(newTodos)
  }
  function onSubmit(data){
  console.log("data: ",data)
  setTodos([...todos,data.todo])
  }
  return(
  <main className="w-full min-h-screen">
    <p className="w-full bg-teal-600 text-black font-bold text-center p-2">TO-DO react-hook-form</p>
    <form 
    className="flex flex-row gap-2 justify-center p-5"
    onSubmit={handleSubmit(onSubmit)}>

      <input type="text"
       className={clsx("p-2 rounded text-black w-full max-w-screen-sm",{
        "border-2 border-red-500 bg-red-300":errors.todo
       })}
       placeholder="Ingresa una tarea"
       required
       {...register('todo',{
        required:{value:true,message:"Campo requerido"},
        minLength:{value:3,message:"Minimo 3 caracteres"},
        maxLength:{value:180,message:'Es mucho texto'},

       })}
       />
       {errors.todo &&(
       <p className="text-red-500 text-center text-sm">{errors.todo?.message}</p>
       )}
      <button 
      className={clsx(" text-black px-3 rounded",{"bg-stone-400":isSubmitted?!isValid:false
        ,"bg-white":isSubmitted?isValid:true})}
      disabled={isSubmitted? !isValid:false}
      >+ Agregar</button>
      </form>
      <div className="max-w-screen-sm w-full mx-auto p-4 flex flex-col gap-1">
        {todos.length===0 && <p className="text-white/50">No tienes tareas pendientes</p>}
          {todos.length>0 &&
          todos.map((todo,idx)=>{
            return(
              <div key={`todo-${idx}`} className="bg-white/10 rounded p-4 flex flex-row justify-between">
                <span className="select-none">{todo}</span>
                <span className="text-red-500" onClick={()=>removeTodo(idx)}>X</span>
                
              </div>
            )
          })
        }
      </div>
  </main>

  )
}
