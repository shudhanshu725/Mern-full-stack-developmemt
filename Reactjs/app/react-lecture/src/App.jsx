import react from 'react';


const Shudhanshu = () => {
  const usersname ={ name: "Shudhanshu" ,
  age: 20,
  };
  return (
    <div>
      <h1>{usersname.name}</h1>
      <h3>{usersname.age > 18 ? "Adult" : "Not an adult"}</h3>
    </div>
  );
};

export default Shudhanshu;