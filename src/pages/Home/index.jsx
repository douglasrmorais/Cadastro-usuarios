
import { Title, Container, Form, ContainerInputs, InputLabel, Input } from './styles.js'

import { useRef } from 'react'

import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import { ToastContainer } from 'react-toastify'

import "react-toastify/ReactToastify.css"

import { toast } from 'react-toastify'

import Button from '../../components/Button'

import TopBackground from '../../components/TopBackground/index.jsx'

function App() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()



  const navigate = useNavigate()

  async function registerNewUser() {

    const name = inputName.current.value
    const age = inputAge.current.value
    const email = inputEmail.current.value
    // const data = await api.post('/usuarios', {
    //   name: inputName.current.value,
    //   age: parseInt(inputAge.current.value),
    //   email: inputEmail.current.value
    // })


    if (!name || !age || !email) {
      toast.warning("Preencha todos os campos")
    }

    if (!/^[A-Za-zà-ÿ\s]+$/.test(name)) {
      toast.error("O nome deve conter apenas letras.");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Digite um e-mail válido.");
      return;
    }

    try {
     await api.post('/usuarios', {
        name,
        age: parseInt(age),
        email,
      })



      toast.success("Usuário cadastrado com sucesso!✅")

      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";

    } catch (erro) {
      toast.error("Erro ao cadastrar usuário.")
    }


  }



  return (
    <Container>

      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName} required pattern='[A-Za-zà-ÿ\s]+' title='Digite apenas letras' />
          </div>

          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type='number' placeholder='Idade do Usuário' ref={inputAge} min={1} max={100000000000000000} required />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail<span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail} required />
        </div>




        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>


      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Lista de Usuário</Button>

      <ToastContainer
        autoClose={2000}
      />

    </Container>




  )
}

export default App
