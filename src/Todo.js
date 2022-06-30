import React, {useState} from 'react';
// import EditForm from './EditForm'
import Form from './Form'

const Todo = ({taskObj, deleteData,index,updateListArray}) => {
  const [model,setModel] = useState(false)

     const toggleMap =()=>{
       setModel(!model)
       {
         taskObj.map((value, id)=>{
           if(value.id === id){
             return 
           }
         })
       }
     }
    
    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const setDelete =()=>{
        deleteData(index)
    }
    

    return (
        <>
        <div className="d-flex justify-center">
        <div class="card mt-5">
         <div class="card-body d-flex w-100 justify-content-between">
         <h5 class="card-title text-success name">{taskObj.Name} <br /> <span class="card-text text-danger description ">{taskObj.Description}</span></h5>
        {/* <p class="card-text text-danger description "> </p> */}
        <p class="text-secondary time"   >{taskObj.time}</p>
        <span className='edit-button' onClick={()=>setModel(true)} > <i  class="fas fa-edit"></i></span>
         <span className='mx-1 edit-button' onClick={setDelete}><i class="fa-solid fa-trash"></i></span>
  </div>

<Form  model={model} toggleMap={toggleMap} updateTask={updateTask}  taskObj = {taskObj}/>
  {/* <EditForm toggle={toggle} model={model} taskObj = {taskObj}   /> */}
</div>
</div>
        </> );
};

export default Todo;