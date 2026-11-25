//Props destructuring
//

const Child = (props) => {
  const { Age, Fullname, City } = props.user;
  return (
    <div>
      <h3>Fullname :{Fullname}</h3>
      <h3>Age :{Age}</h3>
      <h3>City :{City}</h3>
    </div>
  );
};

export default Child;
