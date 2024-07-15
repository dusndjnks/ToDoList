import { useState,useEffect } from "react";
import Todo from "./components/Todo";


 const localData=()=>{
  let list = localStorage.getItem("data")
  if (list){
    return JSON.parse(list)
  }else{
    return[]
  }
 }

function App() {
  const [todoList,setTodoList]=useState(localData())
  const [newTask,setNewTask]=useState("")
 
  // addTask
  const addTask=(e)=>{
    e.preventDefault()
    if(!newTask){
      alert("Enter a task")
    }else{
      let task={
        id:todoList.length===0 ? 1 : todoList[todoList.length-1].id+1,
        taskName:newTask,
        completed:false
      }
      const newTodoList=[...todoList,task]
      setTodoList(newTodoList)
      setNewTask("")
    }}
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(todoList))
    },[todoList])
  

    //deleteTask
     const deleteTask=(id)=>{
        const newTodoList = todoList.filter((item)=>{
          return item.id !== id
        })
        setTodoList(newTodoList)
     }

     //updateTask
     const updateTask=(id)=>{
        let changeTask =todoList.find((item)=>{
          return item.id === id
        })
        let newTodoList=todoList.filter((item)=>{
          return item.id !== id
        })
        setNewTask(changeTask.taskName)
        setTodoList(newTodoList)
     }    

    //  completedTask
    const complete=(id)=>{
      setTodoList(todoList.map((item)=>{
        if(item.id === id){
          return{...item,completed:true}
        }else{
          return item
        }
      }))
    }




  return (
    <div className="App bg-slate-300 h-screen  flex flex-col justify-center items-center gap-5 ">
       <form action=""  className=" gap-6 flex ">
       <input value={newTask} onChange={(e)=>{setNewTask((e).target.value)}} placeholder="Add To-Do-List" type="text" name="" id="" className="text-lg py-2 px-2 rounded-md"/>
       <button className="bg-black text-white px-2 rounded-md text-lg font-bold"  onClick={addTask}>ADD</button>
       </form>
       <div>
        
        {todoList && todoList.map((item, index)=>{
          return(
        <Todo index={index} item={item} deleteTask={deleteTask} updateTask={updateTask} complete={complete} />
        
          )
        })}
        </div>
       
    </div>
  );
}

export default App;
