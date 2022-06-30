import React, { useState,useEffect} from 'react';
import Form from './Form'
import Todo from './Todo';


const TodoList = () => {
    const [modal, setModal] = useState(false);
    
    const [taskList, setTaskList] = useState([])
     

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    
    const toggle = () => {
        setModal(!modal);
    }

    const deleteData = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        setTaskList(taskList)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        document.location.reload()
        console.log(tempList)
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload() 
    }


    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center ">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "task-container  ">
            {taskList.map((obj , index) => <Todo taskObj = {obj} index = {index} deleteData = {deleteData} updateListArray={updateListArray}  /> )}
            </div>
            <Form toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;