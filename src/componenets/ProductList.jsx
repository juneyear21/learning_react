const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];

const ProductList = () => {
  return (
    <>
    {products.map(({id,name,price}) =>(
        <ul key={`${id} ${Math.random}`}>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Price: {price}</li>
        </ul>
    ))}
    </>
  )
}

export default ProductList