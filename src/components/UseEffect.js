import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://localhost:3000/productname")
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []); // Run only once after the initial render
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <h1>2.UseEffect:-</h1>
       <h2>Data:-</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffect
