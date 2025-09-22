import React,{useState} from "react";

export default function array()
{

let [array,setarray] = useState(["bannana" , "apples","fruits"]);

function arrays ()
{

const foods = document.getElementById("food").value;
document.getElementById("food").value = "";

setarray( a => ([...a , foods]))

}

return(


<div>
<h2>your favorite food</h2>
<ul>
     {array.map((food,index) => <li key={index}>{food} </li>) }
</ul>
<input type="text" id="food" placeholder="enter your food" />
<button onClick={arrays}>Submit!</button>
</div>

)

   



}