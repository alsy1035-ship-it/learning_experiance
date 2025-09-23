import React,{useState} from "react";
import Stlyes from "./todostyle.module.css";


export default function todolist()
{

let [taskbar, settask] = useState([]);
let [updatetaskbar, setuptask] = useState("");

function updatelist (event)
{

setuptask(event.target.value);

}
function addtask()
{
if(updatetaskbar === ""){window.alert("pls enter a valid task not an empty string")}
else{

const newtaksbar = updatetaskbar ;

settask([...taskbar , newtaksbar] );
}

}


function deletetask (index)
{

settask(taskbar.filter( ( _ , i ) => i !== index  ))

}

function moveUp(index) {
  if (index === 0) return; 
  const newTasks = [...taskbar]; 

  [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
  settask(newTasks);
}


function moveDown(index) {
  if (index === taskbar.length -1) return; 
  const newTasks = [...taskbar]; 

  [newTasks[index+1 ], newTasks[index ]] = [newTasks[index ], newTasks[index +1]];
  settask(newTasks);
}






return(

<div className={Stlyes.container} >
<h1>To do list:</h1>
<div className={Stlyes.inputcontainer}>
    <input type="text" value={updatetaskbar} onChange={updatelist} className={Stlyes.input} placeholder="enter the task" />
<button className={Stlyes.buttons} onClick={addtask}>Add..</button>
</div>

<ul className={Stlyes.ul}>

{taskbar.map((task , index) => <div key={index} className={Stlyes.taskdiv}>
                                        <li  className={Stlyes.list}>{task}
                                        <div><button  onClick={() => deletetask(index)} className={Stlyes.delbutton}>delete</button>
                                        <button  onClick={()=>moveUp(index)} className={Stlyes.movebut}>⬆</button> 
                                        <button  onClick={()=>moveDown(index)}className={Stlyes.movebut}>⬇</button></div></li>
                                      </div>   
                                      )}

</ul>


</div>


);







}