

const Child = (props) => {
  console.log(props);
  const { email } = props;
  const { message } = props; // Destructuring props to extract the message property
  return (
    <div>
      <h2>Child Component</h2>
      <p>{message}</p>
      <p>{email}</p>
    </div>
  );
};

export default Child;