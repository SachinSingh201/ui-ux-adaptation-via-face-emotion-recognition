import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate()

const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit= async (e)=>{
e.preventDefault()

await API.post("/signup",form)

navigate("/")
}

return(

<div>

<h2>Signup</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<input name="password" placeholder="Password" type="password" onChange={handleChange}/>

<button type="submit">Signup</button>

</form>

</div>

)

}

export default Signup