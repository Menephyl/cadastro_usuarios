import { useRef,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import {

  Container,
  Inputs,
  Title,
  ContainerInputs,
  InputLabel,
  Form
} from './styles.js'

import Button from '../../components/Button'

import TopBackground from '../../components/TopBackground'




function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
    console.log(data)
    navigate('/listagem') // ao usuario criar um novo cadastro, ele é redirecionado para a pagina de listagem
  }
  return (
    <>
      <Container>
        <TopBackground />
        <Form>
          <Title>CADASTRO DE USUÁRIO</Title>

          <ContainerInputs>

            <div>
              <InputLabel>Nome <span> * </span>
              </InputLabel>
              <Inputs type='text' placeholder=' Digite Nome' ref={inputName} />
            </div>

            <div >
              <InputLabel>Idade <span> * </span>
              </InputLabel>
              <Inputs type='text' placeholder=' Digite Idade' ref={inputAge} />
            </div>
            <div style={{ width: '100%' }}>
              <InputLabel>Contato <span> * </span>
              </InputLabel>
              <Inputs type='text' placeholder='  E-mail ou Whatsapp' ref={inputEmail} />
            </div>
            <Button type='button' onClick={registerNewUser} theme='primary'>
              Enviar Cadastro
            </Button>
          </ContainerInputs>
        </Form>
        <Button type='button' onClick={() => navigate('/listagem')}>
          Ver Lista Atual
        </Button>
      </Container>
    </>
  )
}

export default Home
