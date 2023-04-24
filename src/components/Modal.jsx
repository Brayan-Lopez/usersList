import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const Modal = ({isShowForm, closeModal, handleSubmit, register, submit, idMovieToEdit, formState:{errors}}) => {

  return (
    <section className={`modal ${isShowForm?"visible":"invicible"}`}>

      <form onSubmit={handleSubmit(submit)} className='modal-form'>
         <AiFillCloseCircle onClick={closeModal} className='modal-icon hover'/> 
        <h3>Nuevo usuario</h3>
        <div>
          <label htmlFor="first_name">Nombre</label>
          <input id='first_name' {...register("first_name", {
            required: true
          })} type='text' />
          {errors.first_name && <small className='alertInput'>* Campo requerido</small>}
        </div>
        <div>
          <label htmlFor="last_name">Apellido</label>
          <input id='last_name' {...register("last_name", {
             required: true
          })} type='text' />
          {errors.last_name && <small className='alertInput'>* Campo requerido</small>}
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input id='email' {...register("email", {
             required: true
          })} type='email' />
          {errors.email && <small className='alertInput'>* Campo requerido</small>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input id='password' {...register("password", {
             required: true,
             minLength: 7
          })} type='password' />
          {errors.password?.type === 'required' && <small className='alertInput'>* Campo requerido</small>}
          {errors.password?.type === 'minLength' && <small className='alertInput'>* Minimo 8 caracteres</small>}
        </div>
        <div>
          <label htmlFor="birthday">Cumpleaños</label>
          <input id='birthday' {...register("birthday", {
             required: true
          })} type='date' />
          {errors.birthday && <small className='alertInput'>* Campo requerido</small>}
        </div>
        <div>
          <label htmlFor="image_url">Url Imagen</label>
          <input id='image_url' {...register("image_url", {
             required: true
          })} type='text' />
          {errors.image_url && <small className='alertInput'>* Campo requerido</small>}
        </div>
        <div className='modal-button hover'>
          <button>{idMovieToEdit ? "Actualizar usuario":"Agregar Ususario"}</button>
        </div>
      </form>
      
    </section>
  )
}

export default Modal