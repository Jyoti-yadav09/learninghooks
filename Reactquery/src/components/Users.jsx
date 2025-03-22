import React from 'react';
import {useQuery} from "react-query";

const fetchUsers=async()=>
{
     const response=await fetch('https://jsonplaceholder.typicode.com/users');
     return response.json();
};

const Users = () => {
    const {data, isLoading, error}=useQuery('users', fetchUsers);

    if(isLoading)
        return<div>Loading...</div>;

    if(error)
        return <div>
            Error fetching data
        </div>
    
  return (
    <div>
      <h1>Users Lists</h1>
      <ul>
        {data.map(user=>(
            <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
