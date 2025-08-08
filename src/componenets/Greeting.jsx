const now = new Date();
const name = "Rahul";

const Greeting = () => {
  return (
    <div>
      <h1>KoniChiwa</h1>
      <p>Name: {name}</p>
      <p>Date: {now.toLocaleString()}</p>
    </div>
  );
};

export default Greeting;