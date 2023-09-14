import React, { useEffect, useState } from 'react';


const Users = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {usersData.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
