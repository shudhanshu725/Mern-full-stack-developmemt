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
const user1 = {
  id : "012",
  name : "Shudhanshu",
  age : 22,
};
const user2 = {
  id : "013",
  name : "Rohit",
  age : 25,
};
const user3 = {
  id : "014",
  name : "Ankit",
  age : 30,
};
const users = [user1, user2, user3];
const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      {users.map((element, index) => ( 
        <Child key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Parent;