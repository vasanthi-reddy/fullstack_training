import React from 'react';

function UserList ({user}) {
  return (
    <div>
        <h2>
            I am {user.name}. I am {user.age} years old. My mailing address is {user.email};
        </h2>
    </div>
  )
}

export default UserList;