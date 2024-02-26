import React from 'react'
const UserItem = ({user: {login , avatar_url }}) => {
  return (
    <div>
     {login}
    </div>
  )
}


export default UserItem
