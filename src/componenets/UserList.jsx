const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

const UserList = () => {

return (
    <>
    {users.map(({id,name,age}) =>(
        <ul key={`${id} ${Math.random}`}>
            <li>ID: {id}</li>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
        </ul>
    ))}
    </>
  )
}

export default UserList