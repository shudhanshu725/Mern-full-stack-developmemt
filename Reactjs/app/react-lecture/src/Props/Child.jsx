//Props is a way to pass data from parent component to child component in React. It is a read-only property and cannot be modified by the child component. Props can be of any data type, including strings, numbers, arrays, objects, and functions. In this example, we will create a parent component that passes an object as props to a child component.
//Flag level destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables. In this example, we will use destructuring to extract the values of the props object passed from the parent component to the child component.

// const Child = (props) => {
//   const { Age, Fullname, City } = props.user; //destructuring of props object 
//   return (
//     <div>
//       <h3>Fullname :{Fullname}</h3>
//       <h3>Age :{Age}</h3>
//       <h3>City :{City}</h3>
//     </div>
//   );
// };

// export default Child;


const Child = ({element}) => { 
  return (
    < div>
      <p>Name: {element}</p>
    </div>
  )
}

export default Child;
