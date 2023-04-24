import React from 'react'

const ModalDelete = ({isShowDelete, deletUser, user, closeModalDelete}) => {
  return (
    <section className={`modal ${isShowDelete?"visible":"invicible"}`}>

      <div className='modal-delete'>
        <h3>{`¿Estas seguro de eliminar el usuario "${user.first_name} ${user.last_name}"?`}</h3>
        <div>
        <button className='hover' onClick={() => deletUser(user.id)}>Borrar</button>
        <button className='hover' onClick={closeModalDelete}>Cancelar</button>
        </div>
      </div>

    </section>
  )
}

export default ModalDelete