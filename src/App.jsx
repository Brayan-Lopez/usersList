import './App.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

import Modal from "./components/Modal"
import UsersList from './components/UsersList'

function App() {

  const [isShowForm, setIsShowForm] = useState(false)
  const [isShowDelete, setIsShowDelete] = useState(false)
  const [users, setUsers] = useState([])
  const [idMovieToEdit, setIdMovieToEdit] = useState()

  const {handleSubmit,  register, reset, formState} = useForm()

  const BASE_URL = "http://localhost:3000"
  
  const submit = (data) => {
    if(idMovieToEdit){
      editUser(data)
    }else{
      createUser(data)
    }
    resetFormToEmpty()
  }
  
  const closeModal = () => {
    setIsShowForm(!isShowForm)
    resetFormToEmpty()
    setIdMovieToEdit()
  }

  const closeModalDelete = () => {
    setIsShowDelete(!isShowDelete)
  }

  const resetFormToEmpty = () => {
    reset({
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      birthday:"",
      // image_url:""
  })
  }

  const clickToEditCardUser = (data) => {
    closeModal()
    reset(data)
    setIdMovieToEdit(data.id)
  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"
    axios.post(URL, data)
      .then(() => {
        getAllUsers()
        resetFormToEmpty()
        closeModal()
      })
      .catch((err) => console.log(err))
  }

  const editUser = (data) => {
    const URL = BASE_URL + `/users/${idMovieToEdit}/`
    axios.put(URL, data)
    .then(() => {
      getAllUsers()
      setIdMovieToEdit()
      closeModal()
    })
    .catch((err) => console.log(err))
  }

  const deletUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`
    axios.delete(URL)
    .then(() => {
      getAllUsers()
      closeModalDelete()
    })
    .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"
    axios.get(URL)
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <main>
      <div className='createUser'>
        <div>
          <h1>Usuarios</h1>
        </div>
        <div>
          <button className='hover' onClick={closeModal}>+ Crear nuevo usuario</button>
        </div>
      </div>
      <Modal isShowForm={isShowForm} 
      formState={formState}
      idMovieToEdit={idMovieToEdit}
      closeModal={closeModal}
      register={register} 
      handleSubmit={handleSubmit} 
      submit={submit}
      />
      <section>
        <UsersList 
        deletUser={deletUser} 
        users={users} 
        clickToEditCardUser={clickToEditCardUser}
        isShowDelete={isShowDelete}
        closeModalDelete={closeModalDelete}
        />
      </section>
      
    </main>
  )
}

export default App
