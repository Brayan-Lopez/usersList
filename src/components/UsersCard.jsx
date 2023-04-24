import React from 'react'
import { TfiGift } from 'react-icons/tfi';
import { BsTrash } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import ModalDelete from './ModalDelete';



const UsersCard = ({user, deletUser, clickToEditCardUser, isShowDelete, closeModalDelete}) => {
  return (
    <article className='userCard'>
      <div className='userCard-img'>
        <div>
          <img src={`${user.image_url}`} />
        </div>
      </div>
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <ul className='userCard-data'>
        <li>
          <span>CORREO</span>
          <span>{user.email}</span>
        </li>
        <li>
          <span>CUMPLEAÑOS</span>
          <span><TfiGift className='icon-gift'/>{user.birthday}</span>
        </li>
      </ul>
      <ul className='userCard-icons'>
        <li className='hover' onClick={closeModalDelete}>
          <BsTrash className='icon'/>
        </li>
        <li className='hover' onClick={() => clickToEditCardUser(user)}>
          <CiEdit className='icon' />
        </li>
      </ul>

      <ModalDelete
      user={user}
      deletUser={deletUser} 
      isShowDelete={isShowDelete}
      closeModalDelete={closeModalDelete}
      />
      
    </article>
  )
}

export default UsersCard