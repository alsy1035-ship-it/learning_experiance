import React,{useState} from "react";


export default function objectarray()
{

let [cars,setcar] = useState([]);

let [year,setcaryear] = useState(new Date().getFullYear());
let [make,setcarmake] = useState("");
let [model,setcarmodel] = useState("");

function handleCarObject()
{

const carlist = { year : year , make : make, model : model};

 setcar(c => [...c ,  carlist])

 year =new Date().getFullYear;
 make = "";
 model = "";

}
function HandleRemoveObject(index)
{

setcar( cars.filter((_,i ) => i !== index  )   )



}
function caryearhandler(event)
{

    setcaryear(year = event.target.value);

}
function carmakehandler(event)
{

    setcarmake(make = event.target.value);

}
function carmodelhandler(event)
{

    setcarmodel(model = event.target.value);

}
return(

<div>

<h2>Car objects list:</h2>

<ul>

{cars.map((car,index) => 
<li key={index}  onClick={() => {HandleRemoveObject(index)}}>{car.year} {car.make} {car.model}</li> )}
</ul>

<input type="number" value= {year} onChange={caryearhandler} /><br />

<input type="text" value = {make} placeholder="enter make"  onChange={carmakehandler}  /><br />

<input type="text" value = {model} placeholder="enter model"   onChange={carmodelhandler} /><br />

<button onClick={handleCarObject}>Submit!</button>

</div>



);


}