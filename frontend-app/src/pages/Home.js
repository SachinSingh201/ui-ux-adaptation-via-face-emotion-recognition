import { useEffect, useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

function Home(){

const navigate = useNavigate()

const [courses,setCourses] = useState([])

const user = JSON.parse(localStorage.getItem("user"))

useEffect(()=>{

API.get("/courses")
.then(res=>setCourses(res.data))

},[])

return(

<div>

<h1>Welcome {user?.name}</h1>

<h2>Courses</h2>

{courses.map(course=>(

<div key={course.id}>

<h3>{course.title}</h3>

<button onClick={()=>navigate("/course")}>Start Course</button>

</div>

))}

</div>

)

}

export default Home