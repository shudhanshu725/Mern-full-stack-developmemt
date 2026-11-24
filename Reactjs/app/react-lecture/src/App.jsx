import Child from "./component/Child";


const App = () => {
  const usersname = { name: "Shudhanshu", age: 20 };
  return (
    <div>
      <h1>App Component</h1>
      <Child message="Hello from App!" email="shudhanshu@example.com" />
      <p>Name: {usersname.name}</p>
      <p>Age: {usersname.age}</p>
    </div>
  );
};

export default App;