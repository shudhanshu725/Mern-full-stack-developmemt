import Child from "./Child";

const Parent = () => {
  const Fullname = "Shudhanshu";
  const Age = 22;
  const City = "Bangalore";
  return <div>
    <h1>Parent Component</h1>
    <Child Fullname={Fullname} Age={Age} City={City} />
  </div>
}

export default Parent;