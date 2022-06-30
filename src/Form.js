import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save , model ,toggleMap,updateTask,taskObj }) => {
    const [taskName, setTaskName] = useState();
    const [description, setDescription] = useState('');
    const [Time, settime] = useState('');
    


    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description" ){
            setDescription(value)
        }
        else{
            settime(value)
        }
    }
    

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["time"] = Time
        save(taskObj)    
        console.log(taskObj)
        setTaskName("")
        setDescription("")
        settime("")
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let tempObj = {}
        tempObj["Name"] = taskName
        tempObj["Description"] = description
        tempObj["time"] = Time
        updateTask(tempObj)  
        console.log(tempObj)
        
    }
   

    return (
        <>
        <Modal isOpen={modal} toggle={toggle}>
             <ModalHeader toggle={toggle}>Create Task</ModalHeader>
             <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className = "form-group">
                        <label>Time</label>
                        <input type="time" className = "form-control" value = {Time} onChange = {handleChange} name = "time"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
            
            
            <Modal isOpen={model} toggle={toggleMap}>
            <ModalHeader toggle={toggleMap}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className = "form-group">
                        <label>Time</label>
                        <input type="time" class    Name = "form-control" value = {Time} onChange = {handleChange} name = "time"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary"  onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggleMap}>Cancel</Button>
            </ModalFooter>
      </Modal>
      </>
    );
};

export default CreateTaskPopup;