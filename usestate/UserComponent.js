import React from 'react';
import UserList from './UserList';

function UserComponent() {
    const user = [
        {
            id: 1,
            name: 'Vasanthi',
            age: 25,
            email: 'vasanthi7026reddy@gmail.com'

        },
        {
            id: 2,
            name: 'Chandini',
            age: 26,
            email: 'chandini7865domma@gmail.com'

        },
        {
            id: 3,
            name: 'Vidya',
            age: 24,
            email: 'vidyathumma@gmail.com'
        },

    ]
    const userList = user.map(user =>  <UserList key = {user.id} user={user} />) 
  return (
    <div>{userList}</div>
  )
}

export default UserComponent