import React,{useState} from "react";

export default function test ()
{


let [car,setcar] = useState({year:"2025"
                            ,make: "ford"
                            ,model: "mustang"});

function setcarsyear (event)
{

setcar( c => ({...c , year: event.target.value}) );

}
function setcarsmake(event)
{

setcar(c => ({...c , maek: event.target.value}) );

}
function setcarsmodel(event)
{

setcar(c => ({...c , model: event.target.value}));

}

return(

<div>

<p>Your favorite car is : {car.year} {car.make} {car.model}</p>

<input type="text" value={car.year} onChange={setcarsyear}/><br />
<input type="text" value={car.make}  onChange={setcarsmake}/><br />
<input type="text" value={car.model}  onChange={setcarsmodel}/>


</div>

)




}