// src/pages/Home.js
import { useEffect, useState } from 'react';
const apiUrl =import.meta.env.VITE_API_URL;
function Home() {
  const [members,setMembers]=useState([]);



  useEffect(()=>{
      fetch(`${apiUrl}/Member/`)
      .then(Response=>Response.json())
      .then(data =>setMembers(data))
      .catch(error => console.error('Error:', error));
  },[]);

  return (
    <div>
      <h1 className='text-3xl h-[20rem bg-blue-100' >Home Page</h1>
      <p>Welcome to the Home page!</p>
      <ul>
        {members.map(member=>(
          <li key={member.id}> 
            {member.name} {member.email}
          </li>
        ))}
      </ul>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </details>
    </div>
  );
}

export default Home;
