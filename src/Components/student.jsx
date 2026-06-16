function Students(){

const students=[
  {
    name:"Kiruthika",
    course:"Computer Science",
    year:"2026"
  },
  {
    name:"Arun",
    course:"Information Technology",
    year:"2026"
  },
  {
    name:"Priya",
    course:"Electronics",
    year:"2025"
  }
];


return(

<div className="container">

<div className="card">

<h1>
Students Dashboard
</h1>


<div className="student-grid">

{
students.map((student,index)=>(

<div className="student-card" key={index}>

<h3>
{student.name}
</h3>

<p>
Course: {student.course}
</p>

<p>
Batch: {student.year}
</p>


</div>

))
}


</div>


</div>

</div>

)

}

export default Students;