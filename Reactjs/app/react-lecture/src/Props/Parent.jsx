// import Child from "./Child";

// const Parent = () => {
//   const user1 = { Fullname: "Shudhanshu", Age: 22, City: "Bangalore" };
//   const user2 = { Fullname: "Rohit", Age: 25, City: "Delhi" };
//   const user3 = { Fullname: "Ankit", Age: 30, City: "Mumbai" };
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child user={user1} />
//       <Child user={user2} />
//       <Child user ={user3} />
//     </div>
//   );
// };


import Child from "./Child";
const user = ["Shudhanshu", "Rohit", "Ankit"];
const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      {user.map((element, index) => ( 
        <Child key={index} element={element} />
      ))}
    </div>
  );
};

export default Parent;