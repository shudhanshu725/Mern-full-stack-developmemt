// import { useState } from "react";
// import Student from "./Student.jsx";
// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Student name="Shudhanshu" class="12th" />
//       <h1>Age : {count}</h1>

//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }

// export default App;

// onClick Event
// function App() {

//   function hello(name) {
//     alert(name);
//   }

//   return (
//     <button onClick={() => hello("Shudhanshu")}>
//       Click Me
//     </button>
//   );
// }

// export default App;

//onChange Event
// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//       />

//       <h1>{name}</h1>
//     </>
//   );
// }

// export default App;

// onSubmit
// import { useState } from "react";

// function App() {

// const [name,setName]=useState("");

// function submit(e){

// e.preventDefault();

// alert(name);

// }

// return(

// <form onSubmit={submit}>

// <input

// onChange={(e)=>setName(e.target.value)}

// />

// <button>

// Submit

// </button>

// </form>

// )

// }

// export default App;

//Conditional Rendering

//ternary Operator
// function App(){
// let marks = 85;

// return (
//     <>
//         {
//             marks >= 40
//             ? <h1>Pass</h1>
//             : <h1>Fail</h1>
//         }
//     </>
// )
// }
// export default App;

//&& operator
// function App(){
//     let isAdmin = true;

// return(

// <>
// {
// isAdmin && <h1>Admin Panel</h1>
// }
// </>

// )
// }
// export default App;

// import { useState } from "react";
// function App(){
// const [login,setLogin]=useState(false);
// return(
// <>
// <h1>
// {
// login
// ?
// "Welcome":"Please Login"
// }
// </h1>
// <button
// onClick={()=>setLogin(!login)}>Toggle Login
// </button>
// </>
// )
// }
// export default App;

//List Rendering
// function App(){

// const students=[
// { id:1,name:"Rahul",age:20 },
// { id:2,name:"Shudhanshu",age:22 },
// { id:3,name:"Amit",age:21 }
// ];
// return(
// <>
// {
// students.map((student)=>(
// <div key={student.id}>
// <h2>{student.name}</h2>
// <p>{student.age}</p>
// </div>
// ))
// }
// </>
// )
// }

// export default App;

//Form Handling
//controlled component
// import { useState } from "react";

// function App(){

// const [name,setName]=useState("");

// function submit(e){

// e.preventDefault();

// alert(name);

// setName("");

// }

// return(

// <form onSubmit={submit}>

// <input

// placeholder="Enter Name"

// value={name}

// onChange={(e)=>setName(e.target.value)}

// />

// <button>

// Submit

// </button>

// </form>

// )

// }

// export default App;

// import { useEffect } from "react";

// function App() {

//   useEffect(() => {
//     console.log("Component Loaded");
//   },[]);

//   return (
//   <>
//     <h1>Hello React</h1>
//   </>
//   );          

// }



// export default App;

// import { useState, useEffect } from "react";

// function App() {

// const [count, setCount] = useState(0);

// useEffect(() => {
//     console.log("Count Changed");
// }, [count]);

// return (
// <>
// <h1>{count}</h1>

// <button
// onClick={() => setCount(count + 1)}
// >
// Increase
// </button>
// </>
// );

// }
// export default App;

//Object state
//Spread Operator
// import { useState } from "react";

// function App() {

//   const [student, setStudent] = useState({
//     name: "Shudhanshu",
//     age: 22,
//     city: "Varanasi",
//     course: "React"
//   });


//   function changeCity() {
//     setStudent({
//       ...student,
//       city: "Lucknow"
//     });
//   }

  

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Student Details</h1>

//       <h2>Name : {student.name}</h2>
//       <h2>Age : {student.age}</h2>
//       <h2>City : {student.city}</h2>
//       <h2>Course : {student.course}</h2>

//       <hr />

//       <button onClick={changeCity}>
//         Change City
//       </button>

//     </div>
//   );
// }

// export default App;

//Array of Objects State
// 
// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {

//   return (

//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/about" element={<About />} />

//       <Route path="/contact" element={<Contact />} />

//     </Routes>

//   );

// }

// export default App;
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (

    <>
    
      <nav>

        <Link to="/">Home</Link>

        {" | "}

        <Link to="/about">About</Link>

        {" | "}

        <Link to="/contact">Contact</Link>

      </nav>

      <hr />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </>

  );

}

export default App;