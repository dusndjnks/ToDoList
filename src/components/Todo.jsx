import React from 'react'
import DoneIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = ({index,item,deleteTask,updateTask,complete}) => {
  return (
    <div key={index} className="flex gap-3">
    <div>
    <h1 className={` text-xl font-semibold w-[200px] ${item.completed ? "line-through text-green-600": "text-black"}`}>{index+1}. {item.taskName}</h1>
    </div>
    <div className="flex gap-2">
    <DoneIcon className="text-green-600 cursor-pointer" onClick={()=>complete(item.id)}/>
    <EditIcon className="text-blue-600 cursor-pointer " onClick={()=>updateTask(item.id)}/>
    <DeleteIcon className="text-red-600 cursor-pointer" onClick={()=>deleteTask(item.id)}/>
       
    </div>
  </div> 
  )
}

export default Todo