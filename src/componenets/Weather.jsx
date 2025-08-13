const Weather = ({temperature}) => {
  let message;
  if (temperature < 15) {
    message = "It's cold outside!";
  } else if (temperature >= 15 && temperature < 25) {
    message = "It's nice outside!";
  } else {
    message = "It's hot outside!";
  }

  return (
    <h1>{message}</h1>
  );
}

export default Weather