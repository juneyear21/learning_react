const Greeting = ({timeOfDay}) => {
  let message;
  timeOfDay === "Morning" ? message = "Good morning" : timeOfDay === "Afternoon" ? message = "Good afternoon" : message = " niether afternoon or morning";
  return (
    <div>
      <h1>{`Its ${message} Now !!`}</h1>
    </div>
  )
}

export default Greeting