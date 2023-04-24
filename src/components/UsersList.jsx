import React from 'react'
import UsersCard from './UsersCard'

const UsersList = ({users, deletUser, clickToEditCardUser, isShowDelete, closeModalDelete}) => {
  return (
    <div className='userList'>
      {
        users.map((user) => <UsersCard 
        key={user.id} 
        deletUser={deletUser} 
        user={user}
        clickToEditCardUser={clickToEditCardUser}
        isShowDelete={isShowDelete}
        closeModalDelete={closeModalDelete}
        />)
      }
    </div>
  )
}

export default UsersList