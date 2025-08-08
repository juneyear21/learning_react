const product = {
name: "Laptop",
price: "$1200",
availability: "In stock"
}

const ProductInfo = () => {
  return (
    <div>
        <ul>
            <li>Name: {product.name}</li>
            <li>Price: {product.price}</li>
            <li>Availability: {product.availability}</li>
        </ul>
    </div>
  )
}

export default ProductInfo