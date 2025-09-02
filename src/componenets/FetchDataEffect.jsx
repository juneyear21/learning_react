import React from 'react'

const FetchDataEffect = () => {

    const [data, setData] = React.useState([]);

   React.useEffect(()=>{
    async function getData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        if(data && data.length) setData(data);
    }
    getData()
   },[]) 

  return (
    <div>
        <ul>
            {data.map(({ id, title }) => (
  <section key={id}>
    <li>
      {id} - {title}
    </li>
  </section>
))}
        </ul>
    </div>
  )
}

export default FetchDataEffect