import Person from "./componenets/Person";
import Product from "./componenets/Product";

const App = () => {
  return (
    <div>
      <Person name="Rahul" age="25"/>
      <Product name="Phone" price="$499"/>
    </div>
  )
}

export default App