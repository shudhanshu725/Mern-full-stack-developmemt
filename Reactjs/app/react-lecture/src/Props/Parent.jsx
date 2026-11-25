import Child from "./Child";

const Parent = () => {
  const user1 = { Fullname: "Shudhanshu", Age: 22, City: "Bangalore" };
  const user2 = { Fullname: "Rohit", Age: 25, City: "Delhi" };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child user={user1} />
      <Child user={user2} />
    </div>
  );
};

export default Parent;
